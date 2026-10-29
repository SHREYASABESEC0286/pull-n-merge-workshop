# Git command cheat sheet

Run commands from the **root** of your cloned workshop repository.

## Inspect

```bash
git status
# Summarizes modified, staged, and untracked files; run before and after edits.

git diff
# Shows exact unstaged line changes; review before staging.

git log --oneline
# Shows saved commits, newest first; uncommitted edits do not appear.
```

## Branch

```bash
git branch
# Lists local branches; * marks the current branch.

git switch -c feature/my-change
# Creates a new branch and switches to it.

git branch --show-current
# Prints the active branch name.

git switch main
# Switches to main; do this when the working tree is safe to switch.
```

## Stage and commit

```bash
git add git-practice/demo-app/app.js
# Stages this file's current content for the next commit.

git diff --staged
# Shows the exact staged changes that would enter the next commit.

git commit -m "Update event title"
# Saves staged content in local history; it does not upload to GitHub.
```

## Remote and GitHub

```bash
git remote -v
# Shows remote names and URLs; origin should point to your fork.

git fetch origin
# Downloads remote updates without integrating them into your current branch.

git pull
# Fetches then integrates updates into the current branch.

git push -u origin feature/my-change
# Publishes the branch and sets upstream tracking for future pushes.
```

## Recovery (use only in disposable practice files)

```bash
git restore git-practice/recovery-playground.txt
# Restores the working-tree file to its staged version; unstaged edits can be lost.

git revert <commit-hash>
# Creates a new commit that reverses an earlier commit; history is preserved.

git stash
# Temporarily shelves local work.

git stash pop
# Tries to reapply the stash; inspect status because conflicts are possible.
```

Before every commit: `git status` → `git diff` → stage intentionally → `git diff --staged` → `git commit`.
