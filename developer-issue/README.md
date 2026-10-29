# Campus Events Board — Developer Issue + Merge Conflict

This exercise combines a small bug fix with a **deliberately reproducible merge conflict**. The conflict is intentional and happens only because two branches change the same line differently. Perform it in your own workshop fork, never in a real work repository.

## The issue

The **Join event** button currently increases the attendee count by **two**. The expected behavior is **one** attendee per click.

- Open `index.html` in a modern browser (no server or packages required).
- The count starts at 12. One click currently changes it to 14.
- The correct fix is in `counter.js`: change `return currentCount + 2;` to `return currentCount + 1;`.

If Node.js is installed, run the optional test from the repository root:

```bash
node --test developer-issue/counter.test.js
```

The test fails on the starter code and should pass after the fix and conflict resolution.

## Part A — Fix the bug on a feature branch

Start with a clean working tree on `main`:

```bash
git status
git switch main
git switch -c fix/event-counter
```

In `developer-issue/counter.js`, change:

```js
return currentCount + 2;
```

to:

```js
return currentCount + 1;
```

Save, refresh `index.html`, and verify two clicks go from 12 → 13 → 14. Then inspect and commit:

```bash
git diff -- developer-issue/counter.js
git add developer-issue/counter.js
git diff --staged
git commit -m "Fix event attendee counter"
```

Do not push the fix branch yet. We will create the conflict first.

## Part B — Simulate another developer changing the same line

In a real team, a teammate might change the same code while your fix is in progress. To simulate this deterministically, make a second branch from the original `main` and change the same line to a different value (`+3`). This competing value is intentionally wrong and is only a classroom simulation.

```bash
git switch main
git switch -c teammate/counter-update
```

In `developer-issue/counter.js`, change the line to:

```js
return currentCount + 3;
```

Commit the simulated teammate change and publish that branch to your own fork:

```bash
git diff -- developer-issue/counter.js
git add developer-issue/counter.js
git commit -m "Simulate competing counter update"
git push -u origin teammate/counter-update
```

Now integrate the teammate's already-committed change into `main` and push it to **your own fork**:

```bash
git switch main
git merge teammate/counter-update
git push origin main
```

This merge should be a fast-forward and should not conflict, because `main` did not change while the teammate branch was being created. The conflict will occur in the next part.

> Safety note: this push is an intentional training simulation in your personal fork. Do not push deliberately incorrect code to a real team or production repository.

## Part C — Trigger the merge conflict on your fix branch

Your fix branch has `+1`; `main` now has the competing `+3`. Both branches changed the same line from the original `+2`, so Git cannot choose automatically.

```bash
git switch fix/event-counter
git merge main
```

Git should report a conflict in `developer-issue/counter.js`. Open the file in VS Code and locate markers similar to these:

```text
<<<<<<< HEAD
  return currentCount + 1;
=======
  return currentCount + 3;
>>>>>>> main
```

The exact marker labels can vary. `HEAD` is the current `fix/event-counter` branch; the incoming change is from `main`.

## Part D — Resolve, test, and complete the merge

The issue acceptance criteria say one click must add exactly one attendee. Edit `counter.js` so the function contains only the correct line:

```js
function incrementCount(currentCount) {
  return currentCount + 1;
}
```

Remove **all** conflict markers, save the file, then review and complete the merge:

```bash
git status
git diff -- developer-issue/counter.js
git add developer-issue/counter.js
git commit -m "Merge main and resolve counter conflict"
```

Verify the behavior again:

- Browser: click Join event twice; count should go 12 → 13 → 14.
- Optional automated test from the repository root:

```bash
node --test developer-issue/counter.test.js
```

Check the final history and clean state:

```bash
git status
git log --oneline --graph --all
```

## Part E — Push the fix branch and open a pull request

```bash
git push -u origin fix/event-counter
```

On GitHub, create a pull request **from `fix/event-counter` into `main` in your own fork**. Explain that the fix changes the counter to +1, resolves the competing change from `main`, and was verified in the browser.

Because the fix branch merged `main` before the PR, the comparison should show the final correction from `+3` to `+1`. Do not target the instructor's original repository.

## What this teaches

1. A new commit does not automatically cause a merge conflict.
2. A conflict requires competing edits to overlapping lines in diverged branches.
3. Git exposes the disagreement; the bug report and acceptance criteria tell us which result is correct.
4. Resolve the file, inspect the diff, stage it, and complete the merge before pushing the branch.

## Troubleshooting

- **No conflict appears:** check that `fix/event-counter` says `+1`, `main` says `+3`, and then run `git merge main` while on `fix/event-counter`.
- **Working tree is not clean:** use `git status` and safely finish the earlier activity before switching branches.
- **A branch already exists:** use a fresh clone for the full exercise or consistently choose new branch names.
- **Push to `main` is rejected:** confirm `git remote -v` points to your personal fork and that your fork permits pushing to `main`. If it is protected, practise the local conflict but skip the GitHub PR portion in this run.
- **Markers remain:** search the file for `<<<<<<<`, `=======`, and `>>>>>>>`; remove all of them before staging.
- **Browser still shows old behavior:** save `counter.js` and refresh the page opened from this cloned repository.
- **Node.js is unavailable:** the browser check is required; automated tests are optional.
