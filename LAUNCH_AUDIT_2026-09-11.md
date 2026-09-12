# KlassKonnect Launch-Readiness Audit
**Date:** 2026-09-11 | **Repo:** `~/CC/nerdc-ai-tutor` (backend at `main` / `8325adec`, plus uncommitted mobile changes) | **Method:** direct code audit + git history verification + live-code cross-check (see note on methodology below)

## Verdict: Not ready to launch. Two real bugs in the AI Chat path and a genuine security gap, plus brand-consistency gaps, should be fixed first. Nothing found is a large rebuild — all are targeted fixes.

---

## Methodology note (read this first)

I couldn't get a live click-through of the running app. Two blockers, both structural, not something to retry:

- **Terminal.app is click-only** for computer-use control on your Mac — Claude can see and click it but cannot type commands into it (this restriction exists specifically to stop arbitrary command injection through terminals/IDEs).
- **The device shell (`device_bash`) runs inside an isolated Linux VM**, not directly on your Mac — a dev server started there sits on its own network namespace and isn't reachable from a real browser on your Mac. This also blocked me from calling your live Railway backend directly (its egress proxy returned `403 blocked-by-allowlist` for `railway.app`).

So instead I audited the actual source — reading the chat/backend code line-by-line, checking recent git history and commit messages against what's actually in the files today (your `CLAUDE.md` is unusually well-documented; I verified its claims rather than trusting them), and comparing the wired-in app icon/splash assets pixel-by-pixel against the reference brand PNGs. This is more reliable than a click-through for catching logic bugs, but it can't catch layout/rendering issues that only show up on a real device. If you want that layer too, the fastest path is you running `cd mobile && npx expo start --web` yourself and sharing screenshots, or connecting a simulator.

---

## 1. AI Chat / AI Conversations

**The 5 previously-documented bugs are genuinely fixed** — I verified each one directly in the current code, not just from the commit messages:
- Subject grounding uses the topic's real `${subject}` everywhere (no hardcoded "mathematics").
- The chat endpoint joins `content` / `learning_activities` / `evaluation_guides` — real curriculum content reaches the model.
- Cross-grade access is blocked (`WHERE th.grade = $2`, 403 on mismatch).
- `detectIntent()`'s bare-substring bugs ("question" → practice, "exam" → exam-prep) are fixed with specific phrase matching.
- A Claude API failure now logs full diagnostics and rethrows — no more silent fallback to a canned math answer during a real outage.

**Two real problems remain, both worth fixing before launch:**

1. **Conversation history is saved but never shown.** `services/database.js` has `getConversationHistory()`, wired through `offlineApiClient.getConversationHistory()` — but nothing in `TopicDetailsScreen.js` (the only screen with a chat UI) ever calls it. Every message is written to local SQLite via `saveConversation`, then the chat pane opens empty every single time a student leaves and comes back to a topic. A student's prior tutoring conversation on that topic is invisible to them, even though it's sitting in the database. This is a straightforward fix (call `getConversationHistory` in a `useEffect` on mount and hydrate `chatMessages`), but as shipped, "AI Conversations" don't persist in the UI at all.

2. **The gamification "correctness" signal is fake, and badges can never be earned through real use.** `routes/agents.js` line 122: `isCorrect = response.content.includes('Excellent!')` — it's scanning the AI's own reply for praise language, not checking whether the student actually got anything right. And `checkBadgeQualifications`/`awardBadge` (in `gamificationService.js`) are never called from the live chat flow at all — only stats/level-progress reads happen. So today, no student can ever earn a badge through actual usage, and the "correct answer" signal that does exist is trivially wrong (any encouraging reply counts as "correct," regardless of the actual answer). This is documented as a known open item in your own `CLAUDE.md`, and I confirmed it's still true in the code as of today.

**One thing that's already fixed and worth knowing about, since it was serious:** earlier versions of the tutor/practice/assessment prompts instructed the AI to state specific fabricated numbers to students (streak counts, mastery %, point totals, invented badge tiers) with zero real data behind them. That's been stripped — I read the current prompts in `agents/tutor.js`, `practice.js`, and `assessment.js` and all three now explicitly instruct the model to never state a specific streak, points, or badge figure it wasn't given. Good — don't let this regress when you build the real correctness/badge signal called out above.

---

## 2. UI vs. brand assets

Your `CLAUDE.md` documents an "official brand spec" (colors, logo, tagline) synced from `KK_ASSETS_CLAUDE.md`, plus 4 reference PNGs at `~/Desktop/klasskonnect-assets-current/`. I compared those directly against what's actually wired into the app.

**Matches, verified pixel-level:**
- `mobile/assets/icon.png` and `splash.png` are pixel-identical in composition to the reference lockups — same Ink Navy `#0B1B3F` bubble, white K, Signal Yellow `#F5A524` dot.
- `mobile/constants/colors.js`'s 4 core hex values match the spec exactly.
- The "YOUR PERSONAL AI TUTOR" tagline is current everywhere I checked (the old "LEARN YOUR WAY..." tagline is gone).

**Real gap: emoji in user-facing UI, in violation of your own documented "no emoji" rule.** The spec is explicit ("no literal emoji characters in any user-facing screen"), and a 2026-09-10 cleanup pass covered `LoginScreen.js`, `HomeScreen.js`, and `GamificationDisplay.js` — but it missed several screens that are still live with emoji today:
- `TopicDetailsScreen.js:138` — the **AI Chat's own error message**: `'❌ Error: Unable to send message...'`
- `ThemesScreen.js:57` — status label: `'✅ Completed'`
- `TopicDetailsScreen.js:262` — section heading: `'✅ You'll Be Able To'`
- `GamificationNotification.js:88` — `'Level Up! 🎉'`
- `GamificationDashboard.js:192` — `'🎉 You've reached Master level! Congratulations!'`

**Typography is mid-migration, uncommitted.** There are local, uncommitted changes (`git status` shows `mobile/app/_layout.js`, `mobile/constants/colors.js`, `mobile/screens/LoginScreen.js`, `package.json`) that load Archivo/Plus Jakarta Sans and apply them via the shared `typography.*` tokens — this part is sound and propagates automatically to every screen using those tokens. But most screens (`HomeScreen`, `ThemesScreen`, `TopicDetailsScreen`, `SignupScreen`, `ForgotPasswordScreen`, `LeaderboardScreen`, `GamificationDashboard`) also define their own ad-hoc text styles with `fontWeight` but no `fontFamily` — those will keep rendering in the system font (San Francisco/Roboto) even after this lands. Launching now would ship a visibly mixed-font app: headings in the new brand type, buttons/labels in the old system font, on the same screen. Either finish the rollout to every ad-hoc style or hold this commit until it's complete — don't ship it half-applied.

**Minor:** `SignupScreen.js`'s "Join KlassKonnect today" copy was flagged in your own docs as never reviewed against the current brand voice — still true, still unreviewed.

---

## 3. Other launch-readiness findings

- **Backend boots clean.** Ran `node --check` on every file in `backend/` (routes, agents, services, middleware) — no syntax errors. The `assessment.js` boot-breaking bug from 2026-09-06 is confirmed fixed.
- **Secrets are handled correctly.** `.env` is gitignored and not tracked; the only tracked `.env`-named file is an unrelated Xcode config. No `DATABASE_URL`/`JWT_SECRET` in the local backend `.env` — fine if those are set in Railway's own environment, but it does mean this repo can't run its backend locally as-is if you ever need to.
- **Dead cruft, harmless but worth deleting before launch:**
  - `mobile/config/api.jsAPI_URL` — a stray, malformed-filename duplicate of `api.js`. Confirmed unused (nothing imports it), but it's confusing clutter.
  - `mobile/screens/TutorScreen.example.js` — an unused example file, not wired into any route. Fine to keep as a reference or delete; just don't confuse it for the real chat screen (that's `TopicDetailsScreen.js`, reached via `app/(app)/topic-details.js`).
  - `mobile/.env` has `EXPO_PUBLIC_API_URL=http://192.168.1.6:5000` (a stale personal LAN IP) — unused today since `config/api.js` hardcodes the URL directly instead of reading this, but it's confusing dead config.
- **`config/api.js` hardcodes the same production URL for both dev and prod builds** (with a comment reading "TEMP: testing on physical device via Expo Go" still in place). Not a bug exactly — it does mean you can never test locally against a local backend without editing this file — but the "TEMP" comment suggests it wasn't meant to stay this way permanently.

---

## Recommended before launch

1. Fix conversation-history hydration in the chat tab (real UX gap, affects every student's chat).
2. Fix or gate the fake `isCorrect` heuristic — either wire a real correctness signal or stop awarding gamification stats from it.
3. Remove the 5 remaining emoji instances (including the chat's own error message).
4. Finish or hold the typography rollout — don't ship a half-migrated font system.
5. Delete the two dead/stray files (`api.jsAPI_URL`, stale `.env` IP) — five-minute cleanup.

Everything else (curriculum content completeness, the various `Content-Completion-Status.md` trackers, Primary 1-3 content depth, Arabic Language sourcing) is already tracked in your own `CLAUDE.md` and wasn't in scope for this pass, which focused on the chat and UI/brand questions you asked about.

---

## Postscript — resolution status (2026-09-11, later the same day)

The fix pass following this audit closed out most of the above. Status against the numbered recommendations:

1. **Fixed.** Conversation history now loads on reopening a topic.
2. **Fixed, and taken further than "gate it."** The `isCorrect` heuristic was replaced with a real, explicit correctness signal the AI emits and the backend parses; real badge-earning is now wired into the live chat flow for the one badge whose criteria the app actually tracks (see `CEO_SUMMARY_2026-09-11.md` and `CLAUDE.md`'s "Open items" for the remaining 9 unwired badges, which need real tracking built first, not a guess).
3. **Fixed, and extended to a full sweep.** Not just the 5 instances flagged here — a complete regex sweep of the mobile app found and fixed roughly 35 emoji instances across 11 files, replacing each with a proper vector icon rather than deleting the signal.
4. **Still open, not done.** The typography rollout (Archivo/Plus Jakarta Sans) was not touched in this pass — still mid-migration exactly as described above. See `CLAUDE.md`'s "Brand migration status" before shipping; don't ship it half-applied.
5. **Fixed.** Both dead files cleaned up.

Beyond the recommended list, this pass also fixed several bugs found along the way (a broken Exam Prep path, a false "Badge Unlocked!" popup on every message, a badge-name shape mismatch, an unreachable-and-crash-prone Achievements screen) and made a larger architectural fix — the server is now the single source of truth for a student's points/level/streak/badges, with local storage as a write-through cache rather than a second system computing its own numbers. Separately, per a follow-up product decision, the Leaderboard screen (which never actually showed a leaderboard) was removed and replaced with the now-reachable Achievements screen, showing both subject progress and badge completion as percentages. Full detail in `CEO_SUMMARY_2026-09-11.md` and `CLAUDE.md`.
