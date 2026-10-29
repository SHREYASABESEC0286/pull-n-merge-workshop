# Campus Events Board — Developer Issue

The button in this simple page adds attendees, but it currently increases the count by **two** per click. This is the final workshop case.

## Run it

Open `index.html` in a modern browser. The app is static and needs no install or server.

## Test the bug

The count starts at 12. Click **Join event** once: the buggy version jumps to 14. After the fix, it should go to 13.

## Fix it on a branch

From the repository root:

```bash
git switch main
git switch -c fix/event-counter
```

In `developer-issue/counter.js`, change the return expression:

```js
return currentCount + 2;
```

to:

```js
return currentCount + 1;
```

### Verify in a browser

Refresh `index.html` and click the button twice. The count should go from 12 → 13 → 14.

### Optional automated test

Node.js is optional. If installed, run from the repository root:

```bash
node --test developer-issue/counter.test.js
```

The test fails before the fix and passes afterwards. No packages need to be installed.

## Finish

```bash
git status
git diff
git add developer-issue/counter.js
git diff --staged
git commit -m "Fix event attendee counter"
git push -u origin fix/event-counter
```

The last command is optional and requires internet access plus GitHub authentication. On GitHub, open a pull request from `fix/event-counter` into `main` if time permits.
