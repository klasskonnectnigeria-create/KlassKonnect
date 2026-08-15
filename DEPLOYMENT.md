# KlassKonnect Deployment Guide

Quick setup to get the leaderboard system live for testing.

## Backend Deployment (Railway)

Railway is the fastest option—free tier includes PostgreSQL database.

### Step 1: Connect GitHub to Railway
1. Go to [railway.app](https://railway.app)
2. Sign up (GitHub recommended)
3. Create a new project → "Deploy from GitHub"
4. Select this repository
5. Railway auto-detects the Node.js app

### Step 2: Add PostgreSQL Database
1. In Railway project, click "+ Add"
2. Select "Add Database" → PostgreSQL
3. Railway creates `DATABASE_URL` env var automatically

### Step 3: Set Environment Variables
In Railway dashboard, add these under "Variables":

```
PORT=5000
JWT_SECRET=your-super-secret-key-change-this-in-production
CLAUDE_API_KEY=sk-ant-your-actual-anthropic-key
NODE_ENV=production
```

Get your Claude API key from [console.anthropic.com](https://console.anthropic.com/account/keys)

### Step 4: Deploy
1. Click "Deploy" in Railway
2. Railway builds and runs the Docker image
3. Copy the public URL (looks like `https://production-xxxx.railway.app`)
4. Note this URL—you'll need it for mobile

### Step 5: Run Database Schema
1. In Railway, open the PostgreSQL database
2. Go to "Connect" tab, copy the connection string
3. Locally, run:
```bash
psql <DATABASE_URL_FROM_RAILWAY> < backend/scripts/schema.sql
```

(Or SSH into Railway container and run schema there)

---

## Mobile Testing (Expo Go)

Test on your phone instantly without building an APK/IPA.

### Step 1: Install Expo Go
- iOS: Download "Expo Go" from App Store
- Android: Download "Expo Go" from Google Play

### Step 2: Update API URL
Edit `mobile/config/api.js`:
```javascript
export const API_URL = 'https://your-railway-app-url.railway.app'; // Replace with Railway URL
```

### Step 3: Start Expo Dev Server
```bash
cd nerdc-ai-tutor/mobile
npm install  # First time only
npm start
```

This opens Expo CLI in terminal with a QR code.

### Step 4: Scan QR Code
- **iOS**: Open Camera app, point at QR code, tap notification
- **Android**: Open Expo Go app, tap "Scan QR Code", point at terminal

App loads on your phone in ~10 seconds. Changes to code refresh automatically.

---

## Testing the Leaderboard

### Add Test Data
1. Sign up multiple accounts in the app
2. Each account earns points by chatting with the AI tutor
3. Points sync to backend automatically

### View Leaderboard
1. Tap 🏆 icon in top-right of home screen
2. Switch between tabs:
   - **Global** — all students
   - **Grade** — students in your grade
   - **Hot Streaks** — current streak leaders
3. Pull down to refresh

### Verify Backend Sync
Check PostgreSQL:
```sql
-- View all gamification stats
SELECT * FROM gamification_stats;

-- View leaderboard
SELECT s.full_name, gs.total_points, gs.level, gs.current_streak 
FROM gamification_stats gs
JOIN students s ON s.id = gs.student_id
ORDER BY gs.total_points DESC;
```

---

## Quick Reference: URLs

| Component | URL |
|-----------|-----|
| Backend API | `https://your-app.railway.app` |
| PostgreSQL | Railway dashboard → Database tab |
| Mobile | Expo Go + scan QR |

## Troubleshooting

### "Connection refused" on mobile
- Check Railway backend is deployed ✅
- Verify API URL in `mobile/config/api.js` matches Railway URL
- Backend logs: Railway dashboard → "Logs" tab

### Leaderboard shows no data
- Confirm you've signed up and chatted with AI tutor
- Check `gamification_stats` table has rows
- Manually trigger sync: HomeScreen loads and syncs automatically

### Database schema not applied
Run in Railway PostgreSQL console:
```bash
psql $DATABASE_URL < schema.sql
```

---

## Next Steps

1. **Test in production**: Multiple users, different grades
2. **Performance**: Monitor latency on Railway (should be <200ms)
3. **Payments**: Wire up Paystack/Flutterwave for N1,000/month tier
4. **Videos**: Add video lesson hosting (YouTube/Vimeo embeds)

---

**Questions?** Check Railway docs: https://docs.railway.app
