# PULL N MERGE — Git & GitHub Workshop

A 60-minute, hands-on workshop for second-year CSE students. The goal is to learn how Git commands change a local repository, how GitHub stores and shares repositories, and how developers work on branches, review changes, and fix a small bug.

> **Student rule:** Fork this repository to your GitHub account, then clone **your own fork**. Work inside the one cloned repository. Do not run `git init` inside it or inside its folders.

## Start here (before the workshop)

1. Install [Git](https://git-scm.com/downloads) and [VS Code](https://code.visualstudio.com/). [GitHub Desktop](https://desktop.github.com/) is recommended for the GUI overview.
2. On GitHub, open the instructor's `pull-n-merge-workshop` repository and select **Fork**. Create the fork under your own account.
3. On your fork's GitHub page, select **Code** and copy the HTTPS URL.
4. In a terminal, run:

   ```bash
   git --version
   git clone <URL-OF-YOUR-FORK>
   cd pull-n-merge-workshop
   git status
   git remote -v
   ```

5. Open the **repository root** in VS Code. You should see `git-practice`, `developer-issue`, and a `.git` directory (hidden by default).
6. Configure your commit identity once, if needed:

   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
   ```

   Use the email you want associated with commits. Never enter a password or access token in these commands.

**You are ready when:** the root `git status` works and `git remote -v` shows your fork as `origin`. The fork already exists on your GitHub profile; later, you will push a practice branch so you can see how new local work appears online.

## Repository layout

```text
pull-n-merge-workshop/
├── README.md
├── START_HERE.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── .gitignore
├── git-practice/       # command labs + a tiny real-code app in demo-app/
│   └── demo-app/       # edit app.js for status / diff / log practice
└── developer-issue/    # separate one-line bug to fix on your own branch
```

There is one Git repository: the root folder. The two subfolders are ordinary project folders, **not nested repositories**. Run Git commands from the root unless the presenter specifically says otherwise.


### First three commands: use the small codebase

The command labs use one small, real static app in `git-practice/demo-app/`. Change `Campus Tech Meetup` to `Campus AI Night`, then use `git status`, `git diff`, and `git log --oneline` to inspect the state, exact lines, and saved history. Next create `feature/my-change`, stage the app file, inspect the staged diff, and commit. The command guide is in [git-practice/README.md](git-practice/README.md). The edit-before-branch order is only to make the first diff visible during teaching; in normal development, create the branch before editing.

## Workshop flow

1. [Git practice](git-practice/README.md): inspect and edit the Campus Events app, create `feature/my-change`, stage and commit the change, learn remote and recovery commands, add a practice note, push the branch, then practise a controlled merge conflict.
2. [Developer issue](developer-issue/README.md): fix a one-line JavaScript bug in a campus events page, test it, commit it on a new branch, then optionally push and open a pull request.

## Useful official references

- [Git documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/)
- [GitHub Desktop](https://docs.github.com/en/desktop)
- [VS Code source control](https://code.visualstudio.com/docs/sourcecontrol/overview)
- [Open Source Guides](https://opensource.guide/)
- [Hacktoberfest](https://hacktoberfest.com/)
- [Google Summer of Code](https://summerofcode.withgoogle.com/)

## Instructor note

Publish this repository before the event. Ask students to fork it and clone their fork before the talk starts. The practice branch push and the developer-issue branch push are performed to each student's fork, not to the instructor's original repository.
