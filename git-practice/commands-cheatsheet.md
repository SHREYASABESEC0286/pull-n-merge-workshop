# Git Commands — Quick Reference

## Inspect

```bash
git status
git diff
git diff --staged
git log --oneline --graph --all
```

## Branch

```bash
git branch
git switch -c feature/short-description
git switch main
```

## Stage and commit

```bash
git add <file>
git commit -m "Explain the change"
```

## Remote

```bash
git remote -v
git fetch origin
git pull origin main
git push -u origin <branch-name>
```

## Merge and recovery

```bash
git merge <branch-name>
git restore <file>
git revert <commit-hash>
git stash
git stash pop
```

Read the README before copying a command. Replace placeholders with your actual file, branch, or commit names.
