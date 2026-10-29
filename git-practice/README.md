# Git Practice — one repository, one small codebase

Run all commands from the **root of the cloned `pull-n-merge-workshop` repository**. `git-practice/` is a regular folder, not a separate Git repository. Do not run `git init` inside it.

The tiny Campus Events app in [`demo-app/`](demo-app/README.md) is the codebase used throughout the command labs. The separate `developer-issue/` folder is the later real-world bug-fix exercise.

## Lab 01 — Inspect state, exact changes, and saved history

Start from a clean clone. Run these from the repository root:

```bash
git status
git log --oneline
```

- `git status` — summarizes modified, staged, untracked, or clean files. Use it before and after editing and before committing.
- `git diff` — shows exact unstaged line changes (`-` old line, `+` new line). Use it to review code before staging.
- `git log --oneline` — lists saved commits with a short hash and message. Uncommitted edits do not appear here.

Open `git-practice/demo-app/app.js` and change `Campus Tech Meetup` to `Campus AI Night`. Save the file, then run:

```bash
git status
git diff
git log --oneline
```

Expected: status identifies `git-practice/demo-app/app.js` as modified; diff shows the old and new title; log still shows only previously committed changes. Refresh `git-practice/demo-app/index.html` to see the new title.

## Lab 02 — Create and verify a branch

```bash
git branch
git switch -c feature/my-change
git branch --show-current
```

- `git branch` — lists local branches; `*` marks the current branch.
- `git switch -c feature/my-change` — creates a branch at the current commit and switches to it.
- `git branch --show-current` — prints the active branch name so you can check before staging or committing.

For this teaching flow, the harmless edit from Lab 01 is still uncommitted when the new branch is created. Because the new branch starts from the same commit and Git can safely switch, the edit remains in the working tree and will be committed on `feature/my-change`. In normal development, create a feature branch before you start coding.

## Lab 03 — Stage, review, and commit

Make sure `git branch --show-current` prints `feature/my-change`.

```bash
git add git-practice/demo-app/app.js
git diff --staged
git commit -m "Update event title"
git status
git log --oneline
```

- `git add <file>` — stages the file's current content for the next commit; it does not commit or upload it.
- `git diff --staged` — previews the exact staged change that will go into the next commit.
- `git commit -m "..."` — records staged content in local history. It stays local until you push.

Expected: after the commit, status reports a clean working tree and log shows `Update event title` at the top.

## Lab 04 — Understand the remote

```bash
git remote -v
git fetch origin
git pull
git push
```

- `git remote -v` — shows remote names and fetch/push URLs; after forking, `origin` should point to your fork.
- `git fetch origin` — downloads remote updates and refreshes remote-tracking references, without integrating into your current branch.
- `git pull` — fetches and integrates remote changes into the current branch. Check `git status` and the current branch first.
- `git push` — publishes local commits to the remote branch. For the first push of a branch, use `git push -u origin <branch>`.

The commands require a configured remote; network commands also require internet and GitHub authentication. If there are no remote updates, follow the presenter explanation rather than forcing a pull.

## Lab 05 — Recovery commands (use carefully)

Use only `git-practice/recovery-playground.txt` for live recovery practice.

- `git restore <file>` — restores a file in the working tree to its staged version by default; inspect `git diff` first because unstaged edits can be lost.
- `git revert <commit-hash>` — creates a new commit that reverses an earlier commit while preserving history. Use a real hash from `git log --oneline` in a disposable branch.
- `git stash` — temporarily shelves local work; `git stash pop` tries to reapply it and can still produce conflicts.

Never experiment with `git reset --hard` or `git push --force` in this workshop.

## Lab 06 — Add one practice note and push your branch

Before the final push, edit `git-practice/practice-notes.md` and replace the placeholder note with:

```text
Practised the PULL N MERGE Git workflow.
```

Then run:

```bash
git remote -v
git switch feature/my-change
git add git-practice/practice-notes.md
git commit -m "Add practice note"
git push -u origin feature/my-change
```

- `git remote -v` — confirm `origin` points to your own GitHub fork.
- `git switch feature/my-change` — switches to the branch created in Lab 02; do not use `-c` again if it exists.
- `git add git-practice/practice-notes.md` — stages the note.
- `git commit -m "Add practice note"` — saves the note in local history.
- `git push -u origin feature/my-change` — publishes the branch to your fork and sets upstream tracking for shorter future pushes.

On GitHub, refresh your fork and select `feature/my-change` from the branch dropdown. Confirm the commit and note are visible.

## After the command labs — controlled merge conflict

The merge-conflict exercise uses the disposable `git-practice/conflict-demo.txt` file. Start from a clean working tree and follow the steps below. The branches are local to your forked clone; no remote is needed to create a conflict.

```bash
git status
git switch main
git switch -c conflict/branch-a
```

Change the file's only line to `message=Hello from branch A`, then:

```bash
git add git-practice/conflict-demo.txt
git commit -m "Set message from branch A"
git switch main
git switch -c conflict/branch-b
```

Change the same line to `message=Hello from branch B`, then:

```bash
git add git-practice/conflict-demo.txt
git commit -m "Set message from branch B"
git merge conflict/branch-a
```

Git should report a conflict because both branches changed the same line. In VS Code, choose or combine the intended content so the final line is `message=Hello from both branches`. Remove `<<<<<<<`, `=======`, and `>>>>>>>`, then:

```bash
git status
git diff
git add git-practice/conflict-demo.txt
git commit -m "Resolve practice merge conflict"
git log --oneline --graph --all
```

The merge completes on `conflict/branch-b`; `main` remains unchanged. To repeat the exercise, switch to `main` and remove only the disposable local branches after confirming there is no work to keep:

```bash
git switch main
git branch -D conflict/branch-a conflict/branch-b
```

## One-line command recap

| Command | Remember it as |
|---|---|
| `git status` | What does Git see right now? |
| `git diff` | Which unstaged lines changed? |
| `git log --oneline` | What has already been committed? |
| `git branch` / `git switch` | Which branch am I on, and how do I move? |
| `git add` / `git diff --staged` / `git commit` | Stage, inspect, then save locally. |
| `git remote -v` / `fetch` / `pull` / `push` | Check remote, download, integrate, publish. |
| `git restore` / `revert` / `stash` | Recover carefully or park unfinished work. |
