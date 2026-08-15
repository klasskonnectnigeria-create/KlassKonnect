# KlassKonnect Quick Start — Deploy in 5 Minutes

## ⚡ Deploy Backend to Railway

### 1. Fork/Push to GitHub
If not already on GitHub:
```bash
git init
git add .
git commit -m "Initial commit - KlassKonnect with leaderboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nerdc-ai-tutor.git
git push -u origin main
```

### 2. Deploy on Railway (2 clicks)
1. Go to [railway.app/new](https://railway.app/new)
2. Click "Deploy from GitHub repo"
3. Select this repository
4. Railway auto-detects Node.js and PostgreSQL
5. **Copy the deployment URL** (looks like `https://production-xxxx.railway.app`)

### 3. Add Secrets to Railway
In Railway dashboard, go to "Variables" and add:

```
PORT=5000
JWT_SECRET=klasskonekt-secret-key-2024
CLAUDE_API_KEY=sk-ant-[paste-your-key-here]
NODE_ENV=production
```

Get Claude API key: https://console.anthropic.com/account/keys

### 4. Run Database Schema
Open Railway's PostgreSQL console (click database → "Connect") and run:
```sql
-- Copy contents of backend/scripts/schema.sql and paste here
```

Or locally (if you have psql):
```bash
psql postgresql://user:pass@host/db < backend/scripts/schema.sql
```

✅ **Backend is live!**

---

## 📱 Test on Phone with Expo Go

### 1. Install Expo Go
- **iPhone**: App Store → "Expo Go"
- **Android**: Google Play → "Expo Go"

### 2. Update API URL
Edit `mobile/config/api.js`:
```javascript
export const API_URL = 'https://production-xxxx.railway.app'; // Replace xxxx
```

### 3. Start Dev Server
```bash
cd mobile
npm start
```

This opens Expo CLI in terminal with a **QR code**.

### 4. Scan QR Code
- **iPhone**: Open Camera app → point at terminal → tap notification
- **Android**: Open Expo Go app → tap "Scan QR Code" → point at terminal

App loads in ~10 seconds. Changes auto-refresh (hot reload).

✅ **Mobile app is live on your phone!**

---

## 🧪 Test the Leaderboard

### Create Multiple Test Accounts
1. Sign up as Student 1 (Grade Primary 6)
2. Chat with AI tutor about "Fractions" 5 times → earn points
3. Sign up as Student 2 (Grade Primary 6)
4. Chat 3 times → Student 1 is in lead
5. Go back to Student 1, chat more → earn more points

### View Leaderboard
1. Tap **🏆** icon in top-right corner
2. See 3 tabs:
   - **Global** — all students ranked
   - **Grade** — students in your grade
   - **Hot Streaks** — active streaks

### Check Backend Data
```bash
# Connect to Railway PostgreSQL
psql postgresql://username:password@host:5432/db

# View leaderboard
SELECT s.full_name, gs.total_points, gs.level, gs.current_streak
FROM gamification_stats gs
JOIN students s ON s.id = gs.student_id
ORDER BY gs.total_points DESC;
```

---

## 🔍 Verify It's Working

### Checklist
- [ ] Railway backend deployed and running
- [ ] PostgreSQL database created with schema
- [ ] Expo Go app connects to backend
- [ ] Can sign up and login
- [ ] Can chat with AI tutor and earn points
- [ ] Points appear in leaderboard
- [ ] Leaderboard refreshes when you pull down

---

## 🚨 Troubleshooting

### App can't connect to backend
```
Error: Network request failed
```
**Fix**: Check `mobile/config/api.js` has correct Railway URL
```javascript
// Should be:
export const API_URL = 'https://production-xxxx.railway.app';

// NOT:
export const API_URL = 'http://localhost:5000'; // ❌ won't work on phone
```

### Leaderboard is empty
1. Make sure you've chatted with AI tutor (earns points)
2. Check `gamification_stats` table in PostgreSQL:
```sql
SELECT * FROM gamification_stats;
```
3. If empty → go back to app and chat again (auto-syncs on HomeScreen)

### Backend won't deploy
- Check Railway logs: Click project → "Logs" tab
- Common issues:
  - Missing `CLAUDE_API_KEY` env var
  - PostgreSQL not connected
  - Node version mismatch

### Database schema didn't apply
1. SSH into Railway container
2. Run: `psql $DATABASE_URL < schema.sql`
3. Or paste schema.sql contents directly in Railway console

---

## 📊 What's Working

✅ **Complete Feature Set:**
- Offline storage (SQLite on mobile)
- Gamification (points, levels, streaks, badges)
- Push notifications (local + scheduled)
- AI tutor (Claude 3.5 Sonnet via API)
- **Leaderboard** (global, grade, weekly streaks)

---

## 🎯 Next Steps

1. **Stress test**: Sign up 10 test accounts, earn points, verify leaderboard updates
2. **Mobile features**: Test push notifications, check badge unlocks
3. **Payments**: Integrate Paystack for N1,000/month subscription
4. **Analytics**: Monitor leaderboard usage via Railway metrics
5. **Videos**: Add video lessons (embed YouTube/Vimeo)

---

**Stuck?** Check docs at https://docs.railway.app
