# Gamification Backend Integration Guide

> **Note (2026-09-11):** The API shapes below are still accurate, but this guide predates a
> later fix pass: the `isCorrect` field it documents used to be driven by a flawed
> praise-language heuristic (now a real correctness signal), and badge-awarding was not
> actually reachable from the live chat flow at the time this was written (now wired for the
> one badge whose criteria the app tracks). The mobile Leaderboard screen this system fed into
> was separately removed in favor of an Achievements screen. See root `CLAUDE.md` and
> `CEO_SUMMARY_2026-09-11.md` for current state.

**Status:** Backend implementation complete ✅  
**Date:** September 6, 2026  
**Implementation:** gamificationService.js + gamification.js routes

---

## What's Now Working

### 1. **Points & Levels System**
- ✅ Automatic points calculation (base + speed/streak/accuracy multipliers)
- ✅ Level progression (Starter → Master, 5 levels)
- ✅ Streak tracking (current & longest)
- ✅ Badge system (12+ badge types)

### 2. **Database Integration**
- ✅ `gamification_stats` table (points, level, streaks)
- ✅ `student_badges` table (earned achievements)
- ✅ Automatic updates on interaction
- ✅ Backward-compatible with existing tables

### 3. **API Endpoints Ready**

```bash
# Record a chat interaction and auto-update stats
POST /api/gamification/interaction
Body: {
  "isCorrect": true,
  "timeSeconds": 45,
  "topicId": 123,
  "agentType": "practice"
}

# Get student's full profile
GET /api/gamification/profile
Response: { points, level, levelName, badges, badgeCount, streaks }

# Get progress toward next level
GET /api/gamification/level-progress
Response: { currentLevel, pointsToNextLevel, progressPercent, ... }

# Get simple stats (backward compatible)
GET /api/gamification/stats
Response: { totalPoints, level, currentStreak, longestStreak }
```

---

## How to Integrate with Chat Endpoint

### Step 1: Update agents.js Chat Route

In `/backend/routes/agents.js`, after getting the AI response, add:

```javascript
import { updateGamificationStats } from '../services/gamificationService.js';

// In the POST /chat handler, after getting response:

// Determine if response indicates correct answer
// (This is heuristic - adjust based on your agents' feedback patterns)
const isCorrect = response.includes('Excellent!') || 
                  response.includes('You got it!') || 
                  response.includes('That\'s right!');

// Record the interaction
try {
  await updateGamificationStats(req.studentId, {
    isCorrect,
    timeSeconds: Math.round((Date.now() - startTime) / 1000),
    topicId,
    responseQuality: 'normal'
  });
} catch (error) {
  console.error('Gamification update failed:', error);
  // Don't block the response - continue even if gamification fails
}

// Return response with gamification context
res.json({
  message: response,
  gamification: {
    pointsEarned: isCorrect ? 10 : 3,
    streak: currentStreak,
    level: currentLevel
    // Include in response so mobile app can show feedback
  }
});
```

### Step 2: Call from Mobile Client

In your React Native app, after a chat response:

```javascript
// After receiving chat response
const recordInteraction = async (response, isCorrect) => {
  try {
    const gamificationUpdate = await fetch(
      `${API_URL}/api/gamification/interaction`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          isCorrect,
          timeSeconds: responseTime,
          topicId: currentTopic.id,
          agentType: 'practice' // or 'tutor', 'assessment'
        })
      }
    );
    
    const gamification = await gamificationUpdate.json();
    
    // Show feedback to user
    Alert.alert(
      `+${gamification.pointsEarned} points!`,
      `Level ${gamification.level} • Streak: ${gamification.currentStreak}`
    );
    
    // If badges unlocked
    if (gamification.badgesUnlocked.length > 0) {
      showBadgeUnlockedAnimation(gamification.badgesUnlocked);
    }
  } catch (error) {
    console.error('Failed to record interaction:', error);
  }
};
```

### Step 3: Display Gamification on Dashboard

Add a new screen or dashboard section showing:

```javascript
// Fetch profile
const profile = await fetch(`${API_URL}/api/gamification/profile`, {
  headers: { 'Authorization': `Bearer ${token}` }
});

const data = await profile.json();

// Display:
// - Current level with progress bar
// - Total points
// - Current streak with 🔥 indicator
// - Badge collection with earned badges highlighted

// Example display:
<Dashboard>
  <LevelDisplay 
    level={data.level} 
    levelName={data.levelName}
    points={data.points}
    nextLevelPoints={NEXT_LEVEL_POINTS[data.level + 1]}
  />
  
  <StreakDisplay 
    current={data.currentStreak}
    longest={data.longestStreak}
  />
  
  <BadgeCollection badges={data.badges} />
  
  <Leaderboard />
</Dashboard>
```

---

## Gamification Configuration

### Points System

```javascript
// From gamificationService.js POINTS config

CORRECT_ANSWER: 10,      // Base points for correct answer
WRONG_ANSWER: 3,         // Points for attempting (even if wrong)
STREAK_BONUS: 1.5,       // x1.5 multiplier for consecutive correct
SPEED_BONUS: 1.2,        // x1.2 multiplier for <60 second response
FIRST_CORRECT: 15,       // First correct on new topic
CONCEPT_MASTERY: 25,     // After topic assessment
```

### Levels

```
Level 1: Starter (0 points)
Level 2: Explorer (100 points)
Level 3: Challenger (500 points)
Level 4: Expert (1500 points)
Level 5: Master (3000+ points)
```

### Badges

12+ badge types organized by category:

**Skill Badges**
- 🎓 Addition Master (5 correct in a row)
- 🌟 Fraction Expert (topic mastered)

**Consistency Badges**
- 🔥 Week Warrior (7 days studied)
- 💪 Month Marathon (30 days studied)

**Speed Badges**
- ⚡ Speed Demon (10 problems in <5 min)

**Accuracy Badges**
- 🎯 Sharpshooter (95%+ accuracy)
- 💯 Perfectionist (15 correct in a row)

**Discovery & Social**
- 🧠 Insight Hunter (spotted pattern)
- 👥 Mentor (helped classmate)
- 📚 Scholar (3+ topics mastered)

---

## Testing the Integration

### 1. Test Points Calculation

```bash
# Correct answer (should get 10 points)
curl -X POST http://localhost:5000/api/gamification/interaction \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"isCorrect": true, "timeSeconds": 45, "topicId": 1}'

# Should see: pointsEarned: 10
```

### 2. Test Level Progression

```bash
# Submit 50 interactions with isCorrect: true
# Should progress from Level 1 → Level 2 at 100 points

curl http://localhost:5000/api/gamification/level-progress \
  -H "Authorization: Bearer YOUR_TOKEN"

# Should show progress toward next level
```

### 3. Test Badge Unlocking

```bash
# Complete 15 correct answers in a row
# Perfectionist badge should unlock

curl http://localhost:5000/api/gamification/profile \
  -H "Authorization: Bearer YOUR_TOKEN"

# Should show PERFECTIONIST in badges array
```

---

## Database Queries

### Check Student's Current Stats

```sql
SELECT total_points, level, current_streak, longest_streak
FROM gamification_stats
WHERE student_id = 123;
```

### View Student's Badges

```sql
SELECT badge_name, earned_at
FROM student_badges
WHERE student_id = 123
ORDER BY earned_at DESC;
```

### Leaderboard Query

```sql
SELECT s.full_name, gs.total_points, gs.level, gs.current_streak
FROM students s
JOIN gamification_stats gs ON s.id = gs.student_id
ORDER BY gs.total_points DESC
LIMIT 20;
```

---

## Next Steps (Frontend Work)

### Phase 1: Display Dashboard
- [ ] Create `/screens/GamificationDashboard.js`
- [ ] Show level progress with visual bar
- [ ] Display points and streak
- [ ] Show earned badges

### Phase 2: Chat Integration
- [ ] Update `/screens/TutorScreen.js` to call `/api/gamification/interaction`
- [ ] Show point feedback after each response
- [ ] Display achievement notifications
- [ ] Update streak in real-time

### Phase 3: Leaderboard Display
- [ ] Use existing `/api/leaderboard/global`, `/grade`, `/weekly` endpoints
- [ ] Create leaderboard view with rankings
- [ ] Show personal rank and surrounding players

### Phase 4: Choice Paths (UI)
- [ ] Add interactive A/B/C/D choice buttons to chat
- [ ] Route to `/api/agents/chat?path=A` with selected path
- [ ] Show consequence of path choice

### Phase 5: Conversation History
- [ ] Thread conversations so "you asked X before" works
- [ ] Store in `conversation_logs` table (already exists)
- [ ] Pass history to Claude for better context

---

## Performance Notes

- **Database Indexes**: `idx_gamification_*` indexes already created for points, level, streak
- **Batch Updates**: Consider batching multiple interactions if needed
- **Caching**: Consider caching leaderboard (updates every 5 min or on every X interactions)
- **API Rate Limiting**: Recommend rate limiting `/interaction` endpoint (1 per 5 seconds per student)

---

## Troubleshooting

### Issue: "Badge not unlocking"
- Check `student_badges` table for UNIQUE constraint on (student_id, badge_type)
- Verify badge criteria are met in `checkBadgeQualifications()`
- Ensure timestamp is correct for multi-day badges

### Issue: "Level not increasing"
- Verify points are being recorded in `gamification_stats.total_points`
- Check LEVEL thresholds match expected values
- Ensure SQL UPDATE is successful (check DB logs)

### Issue: "Streak stuck at 0"
- Streak resets on wrong answer—this is by design
- Check `last_activity_date` is being updated
- Verify date comparison logic for consecutive days

---

## Architecture Diagram

```
Chat Endpoint (agents.js)
  ↓
Determine if correct (heuristic)
  ↓
Call updateGamificationStats()
  ↓
gamificationService.js
  ├─ Calculate points
  ├─ Update streaks
  ├─ Calculate new level
  ├─ Check badge criteria
  └─ Return updated stats
  ↓
Update DB (gamification_stats, student_badges)
  ↓
Return to mobile with gamification feedback
  ↓
Mobile app displays:
  - Points earned
  - New streak
  - Level progress
  - Badge notifications
```

---

## Summary

**What Works Now:**
✅ Points system with multipliers  
✅ Level progression (1-5)  
✅ Streak tracking  
✅ Badge system (12+ types)  
✅ API endpoints  
✅ Database integration  

**What's Next:**
📱 Mobile dashboard  
💬 Chat integration  
🏆 Leaderboard display  
🎮 Choice path UI  
📜 Conversation history  

**Estimated Frontend Time:** 3-5 days for full integration

