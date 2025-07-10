- ## 🔄 How to Keep Your Feature Branch in Sync with the Latest Code from `main`

  ### ✅ Method 1: Using `git merge` (Safe & Common)

  ```bash
  # 1. Switch to main and update it
  git checkout main
  git pull origin main

  # 2. Switch back to your feature branch
  git checkout feature-branch

  # 3. Merge main into your feature branch
  git merge main
  ```

  - Brings the latest changes from `main` into your feature branch.
  - May create a **merge commit**.
  - Recommended when collaborating in a team.

  ***

  ### ✅ Method 2: Using `git rebase` (Clean History)

  ```bash
  # 1. Update main
  git checkout main
  git pull origin main

  # 2. Switch to your feature branch
  git checkout feature-branch

  # 3. Rebase onto main
  git rebase main
  ```

  - Reapplies your feature branch commits on top of the latest `main`.
  - Produces a **linear history**.
  - May require resolving conflicts and using:
    ```bash
    git rebase --continue
    ```

  ***

  ### 🆚 Merge vs Rebase – Comparison

  | Feature             | `git merge`          | `git rebase`              |
  | ------------------- | -------------------- | ------------------------- |
  | Commit history      | Keeps merge commits  | Linear commit history     |
  | Undo safety         | Easy to undo         | Tricky if already pushed  |
  | Conflict resolution | Once                 | Step-by-step              |
  | Best for            | Team/shared branches | Personal/feature branches |

  ***

  ### 🔐 After Syncing

  To push changes to the remote feature branch:

  ```bash
  git push origin feature-branch
  ```

  If you used `rebase` and already pushed before:

  ```bash
  git push --force-with-lease
  ```

  > ⚠️ Use force-push carefully — it's destructive if others are using the same branch.

  ## 🧩 How to Resolve Merge Conflicts

  ### ✅ Steps to Resolve

  ```bash
  # 1. Try to merge
  git merge main

  # 2. Git shows conflict
  # Manually edit the conflicted file(s) to resolve the conflict

  # 3. After resolving
  git add <conflicted-files>
  git commit
  ```

  ### 📌 Tip:

  Use `git status` to view the conflicted files.

  You can also use:

  ```bash
  git merge --abort
  ```

  to cancel the merge and go back to the previous state if needed.
