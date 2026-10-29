# Bug report: event count increases by two

**Type:** Bug

**Where:** Campus Events Board → Join event button

## Actual behavior

Every click increases the attendee count by **2**.

## Expected behavior

Every click should increase the attendee count by **1**.

## Reproduction steps

1. Open `developer-issue/index.html` in a browser.
2. Note the attendee count (starts at 12).
3. Click **Join event** once.
4. Observe that the current version jumps from 12 to 14.

## Acceptance criteria

- A click adds exactly one attendee.
- Two clicks add exactly two attendees.
- The browser page still works after the fix.
- The fix is committed on a new branch, not directly to `main`.
