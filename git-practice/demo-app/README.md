# Tiny Campus Events app — command practice

This dependency-free static page gives students a small real codebase for the Git command labs. It can be opened directly in a browser; no package installation or server is required.

## First command lab: inspect a real change

1. From the repository root, run `git status` and `git log --oneline` to see the starting state and saved history.
2. Open `git-practice/demo-app/app.js` and change:

   ```js
   const eventTitle = "Campus Tech Meetup";
   ```

   to:

   ```js
   const eventTitle = "Campus AI Night";
   ```

3. Save the file and run `git status`, `git diff`, and `git log --oneline` from the repository root.
4. Notice: status identifies the modified file; diff shows the old/new lines; log shows committed history and does not include this unsaved-to-history edit.
5. Refresh `index.html` in a browser to see the updated event title.

In the next lab, create `feature/my-change` before staging or committing the edit. This sequence first makes a visible diff for teaching purposes; in normal development, create the feature branch before editing.

Do not run `git init` here. The only Git repository is at the workshop root.
