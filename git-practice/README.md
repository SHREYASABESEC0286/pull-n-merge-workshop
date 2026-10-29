# Git Practice — One Repo, One Workflow

**Work from the repository root**, not from inside this folder. This is a regular project folder, not a separate Git repository.

## Practice sequence

### 1. Inspect the current repository

```bash
git status
git diff
git log --oneline --graph --all
```

The working tree should initially be clean. `git diff` may show nothing until you edit a tracked file. That empty output is a valid result.

### 2. Create a branch before making your practice change

```bash
git branch
git switch -c practice/my-commands
```

If you already created this branch, switch to it using `git switch practice/my-commands`.

### 3. Make a tiny edit

Open `git-practice/practice-notes.md` and add one line under **My notes**. Then run:

```bash
git status
git diff
```

### 4. Stage and commit

```bash
git add git-practice/practice-notes.md
git diff --staged
git commit -m "Add my Git workshop notes"
```

Use `git status` and `git log --oneline` to verify the commit.

### 5. Inspect your remote and sync safely

```bash
git remote -v
git fetch origin
git switch main
git pull origin main
git switch practice/my-commands
```

`fetch` downloads remote-tracking information; it does not change your working files. `pull` integrates remote changes into the current branch. If `git pull origin main` reports that you are already up to date, that is a normal result. If you have conflicts or unexpected local changes, stop and ask for help rather than trying destructive commands.

### 6. Push your branch to your own GitHub profile

```bash
git push -u origin practice/my-commands
```

Refresh your fork's GitHub page and select the branch dropdown. The branch should appear. If your branch uses another name, substitute that name in the command.

### 7. Make a controlled merge conflict (in this repository)

This lab deliberately uses two branches that edit the same line. Start from a clean working tree and from `main`:

```bash
git status
git switch main
git switch -c conflict/branch-a
```

Edit the first line of `git-practice/conflict-demo.txt` to `message=Hello from branch A`, then:

```bash
git add git-practice/conflict-demo.txt
git commit -m "Set message from branch A"
git switch main
git switch -c conflict/branch-b
```

Edit that same line to `message=Hello from branch B`, then:

```bash
git add git-practice/conflict-demo.txt
git commit -m "Set message from branch B"
git merge conflict/branch-a
```

Git should report a conflict because both branches changed the same line. Open the file in VS Code, keep or combine the wording so the final line reads `message=Hello from both branches`, and remove every conflict marker. Then:

```bash
git diff
git add git-practice/conflict-demo.txt
git commit -m "Resolve practice merge conflict"
git log --oneline --graph --all
```

This merge finishes on `conflict/branch-b`; it does not change `main`. Do not switch branches before resolving the conflict. If you want to repeat the exercise, first return to `main` and create fresh branches with new names, or ask the instructor for the reset instructions.

### 8. Recovery commands (optional / take-home)

Use `git-practice/recovery-playground.txt` only; it is a disposable practice file. These operations create additional practice history on your practice branch.

**A. Discard an unstaged edit with `git restore`:**

1. Switch to your practice branch: `git switch practice/my-commands`.
2. Add a temporary line to `git-practice/recovery-playground.txt`.
3. Inspect it with `git diff`.
4. Run `git restore git-practice/recovery-playground.txt` and verify with `git status` that the edit is gone.

**B. Reverse a commit with `git revert`:**

1. Add a harmless line to `recovery-playground.txt`, stage it, and commit it.
2. Get the commit hash using `git log --oneline`.
3. Run `git revert <that-commit-hash>` and save the editor message if Git opens one.
4. Check `git log --oneline` for the new `Revert ...` commit and inspect the file.

**C. Park unfinished work with `git stash`:**

1. Add a different temporary line to `recovery-playground.txt` but do not stage it.
2. Run `git stash`, then `git status`.
3. Run `git stash pop` and inspect the restored edit with `git diff`.

**Never run `git reset --hard` or `git push --force` as part of this beginner lab.**

### Repeat the merge-conflict exercise

After a conflict exercise has been completed and you are no longer on either conflict branch, you can return to main and delete only these disposable local lab branches:

```bash
git switch main
git branch -D conflict/branch-a conflict/branch-b
```

This removes the local branches created by the conflict exercise. Do not use these branch-deletion commands on work you want to keep. Then repeat the exact branch setup steps above.
