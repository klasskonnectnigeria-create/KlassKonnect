# NERDC AI Tutor — Comprehensive QA Checklist

Use this checklist to systematically test the app before release, after major changes, or as a recurring regression pass. Check items off as you go; note the date and app version/commit tested at the top of each pass.

**Test pass date:** ______________
**Commit/version tested:** ______________
**Tester:** ______________
**Device(s) used:** ______________ (iOS Simulator / Android Emulator / Physical device / Model)

---

## 1. UI & Visual

### Layout & Rendering
- [ ] All screens render without visual clipping, overlap, or text truncation
- [ ] Text is legible at default device font size (check with larger accessibility font sizes too)
- [ ] Images, icons, and emojis render correctly (no missing-glyph boxes)
- [ ] Color contrast is sufficient for readability (especially chat bubbles, buttons)
- [ ] Consistent spacing/padding across screens (no screen feels cramped vs. another)
- [ ] App icon and splash screen display correctly on launch

### Loading & Empty States
- [ ] Loading indicators appear during network calls (login, fetching themes/topics, sending chat messages)
- [ ] Empty states are handled gracefully (e.g. a grade with zero themes — see Known Gaps: Primary 5/6, JSS 1)
- [ ] No indefinite spinners — loading states resolve or time out with a message
- [ ] Skeleton/placeholder UI (if used) matches final content layout

### Error States
- [ ] Network failure shows a clear, non-technical error message (not a raw stack trace or "undefined")
- [ ] Invalid login credentials show a specific, helpful error (not a generic failure)
- [ ] Server errors (500s) degrade gracefully in the UI
- [ ] Retry mechanism exists and works after a failed request

---

## 2. Placement & Positioning

- [ ] Primary actions (Send, Submit, Continue) are consistently positioned across screens
- [ ] Back/navigation buttons are in a consistent, expected location
- [ ] Touch targets meet minimum size (~44x44pt) — nothing is too small to tap reliably
- [ ] Elements respect safe areas (notch, home indicator, status bar) on all tested devices
- [ ] Keyboard doesn't obscure the active input field or the Send button when typing a chat message
- [ ] Scrollable areas (chat history, topic lists) scroll smoothly and don't clip content at edges
- [ ] Bottom tab bar / navigation (if present) stays fixed and doesn't overlap content

---

## 3. Navigation & Links

- [ ] Every button and tappable element navigates to the correct destination
- [ ] Back navigation returns to the correct previous screen (not skipping or looping)
- [ ] Deep navigation (e.g. Theme → Topic → Chat) preserves correct context at each level
- [ ] No dead-end screens (every screen has a way back or forward)
- [ ] No broken or placeholder links (check any external links: help, support, terms, privacy if present)
- [ ] Switching between Tutor / Practice / Assessment modes for the same topic works and is clearly labeled
- [ ] App state (login session, current topic) survives app backgrounding and resuming

---

## 4. Authentication

- [ ] Signup with valid new credentials succeeds and logs the user in
- [ ] Signup with an already-used email is rejected with a clear message
- [ ] Signup requires and validates a grade selection
- [ ] Login with correct credentials succeeds
- [ ] Login with incorrect password is rejected with a clear message
- [ ] Login with non-existent email is rejected with a clear message
- [ ] Session persists across app restarts (JWT stored and reused correctly)
- [ ] Logout clears the session and returns to login screen
- [ ] Expired/invalid token is handled gracefully (redirects to login, doesn't crash)

---

## 5. Content & Curriculum Correctness

### Grade Isolation
- [ ] A Primary 4 student sees only Primary 4 themes/topics
- [ ] An SS3 student sees only SS3 themes/topics
- [ ] Cross-grade access via direct API calls (e.g. guessing theme IDs) is blocked (403)
- [ ] A student at a grade with no content (Primary 5/6, JSS 1) sees an appropriate empty state, not an error or someone else's content

### Subject & Topic Data
- [ ] All 9 SS3 subjects appear correctly for SS3 students: Mathematics, English Language, Government, Physics, Chemistry, Biology, Geography, Economics, Literature-in-English
- [ ] Topics within each subject appear in the correct sequence order
- [ ] Topic names, learning outcomes, and content display without corruption (encoding issues, truncation, broken characters)
- [ ] `curriculum_version` (legacy vs. nesri_2025) doesn't cause any visible confusion or duplication in the UI
- [ ] No duplicate themes appear (check known Primary-grade duplicate theme issue hasn't resurfaced or spread)

### Progress Tracking
- [ ] Completing/engaging with a topic updates progress status correctly
- [ ] Progress percentages/indicators match actual activity
- [ ] Progress is scoped correctly per student (not shared or leaked across accounts)

---

## 6. Chat Responses — Basic Level

Test with straightforward, on-syllabus questions for at least 2–3 topics per subject area (rotate across Math, a Science, a Humanities subject each pass).

- [ ] **Tutor**: Explains a basic concept clearly, using the actual syllabus content for that topic (not generic/off-syllabus material)
- [ ] **Tutor**: Uses Nigerian context/examples where natural (not forced)
- [ ] **Tutor**: Personalizes response using the student's name
- [ ] **Tutor**: Ends with a next step or check-in question
- [ ] **Practice**: Generates one clear, topic-relevant question at a time
- [ ] **Practice**: Gives accurate, encouraging feedback on a correct answer
- [ ] **Practice**: Gives a helpful hint (not the answer) on an incorrect answer
- [ ] **Assessment**: Generates a structured question grounded in the topic's learning outcome
- [ ] **Assessment**: Correctly evaluates a student's answer and explains why
- [ ] **Assessment**: Progresses to a new question after each answer, doesn't repeat

---

## 7. Chat Responses — Advanced / Complex Level

- [ ] Tutor correctly handles a follow-up question that builds on its own previous answer (multi-turn coherence)
- [ ] Tutor correctly handles a student providing a partially-correct or ambiguous answer (doesn't just say "wrong," engages with the reasoning)
- [ ] Assessment correctly handles a multi-part question, tracking which part the student is answering
- [ ] Practice generates progressively harder questions when asked (e.g. "give me something harder")
- [ ] A student switching from Tutor → Practice → Assessment on the *same topic* maintains appropriate topic-level context without one mode's tone bleeding into another
- [ ] A student switching between *different topics* does NOT show cross-topic bleed (verify the earlier bug — "I notice we drifted into X" — does not reappear; see CLAUDE.md fix #7)
- [ ] Long, detailed student messages (e.g. a full worked-out answer) are read and responded to accurately, not just skimmed for keywords
- [ ] Off-topic or nonsensical input is redirected politely back to the subject, not answered as if legitimate
- [ ] Requests for content outside the syllabus (e.g. asking Math tutor about Chemistry) are handled sensibly (redirected or politely declined)

---

## 8. Deep / Extended Interaction Testing

- [ ] A full simulated lesson (5+ back-and-forth turns) on one topic stays coherent, on-topic, and doesn't degrade in quality
- [ ] A full assessment session (3+ questions) correctly tracks cumulative performance and gives an accurate end-of-session summary
- [ ] Conversation history correctly resets/starts fresh after a backend redeploy (expected behavior — verify it's *understood* as expected, not mistaken for a bug)
- [ ] Response latency remains acceptable through a long session (no significant slowdown)
- [ ] No repeated/looping responses across a long session
- [ ] Model doesn't fall back to demo-mode canned responses at any point (verify against the `claude-opus-5` regression class of bug — confirm real API responses throughout)

---

## 9. Offline Behavior

- [ ] App correctly detects offline state (see `connectionManager`)
- [ ] Cached themes/topics are viewable offline
- [ ] Sending a chat message while offline queues it locally with a clear "will send when back online" indicator
- [ ] The offline message does **not** falsely appear when the device is actually online (regression check — see earlier localhost-misconfiguration bug)
- [ ] Queued messages send automatically and correctly once connectivity returns
- [ ] No data loss or duplication when transitioning offline → online

---

## 10. Backend / API Spot Checks

(Can be done via curl per the commands in `CLAUDE.md`, doesn't require the mobile app)

- [ ] `/api/auth/signup` and `/api/auth/login` return correct tokens and error codes
- [ ] `/api/content/themes` requires auth and returns only the requesting student's grade
- [ ] `/api/content/themes/:id/topics` blocks cross-grade access (403)
- [ ] `/api/agents/chat` returns grounded, non-demo responses for tutor/practice/assessment
- [ ] No debug endpoints are reachable (`/api/debug/config`, `/api/debug/test-claude` should 404 — regression check)
- [ ] No sensitive data (API keys, tokens, other students' info) appears in any API response body

---

## 11. Performance

- [ ] App launch time is reasonable (no long blank screen)
- [ ] Screen transitions are smooth (no visible jank)
- [ ] Chat responses arrive within a reasonable time (note typical latency: ______ seconds)
- [ ] Large topic lists (if any subject grows large) scroll smoothly without lag
- [ ] No memory growth/crash after extended use in one session

---

## 12. Cross-Device / Cross-Platform

- [ ] iOS Simulator — full pass
- [ ] Android Emulator — full pass
- [ ] Physical iOS device via Expo Go — full pass
- [ ] Physical Android device via Expo Go — full pass
- [ ] Behavior is consistent across all tested platforms (no platform-specific breakage)

---

## 13. Regression Watchlist

(Bugs previously found and fixed — confirm they haven't reappeared)

- [ ] Model string is a valid, current Claude model (not `claude-opus-5` or any other invalid string)
- [ ] Debug endpoints remain removed and inaccessible
- [ ] Grade-based content filtering remains enforced on all content endpoints
- [ ] Conversation history remains scoped per-topic, not just per-student
- [ ] Mobile `API_URL` config points to the intended backend (production vs. localhost) for the current testing purpose — verify before each pass which one is active

---

## Notes / Issues Found This Pass

_(Log anything discovered during this checklist run — description, steps to reproduce, severity)_

1.
2.
3.
