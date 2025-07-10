**NPM** - NPM stands for node package manager. It lets you bring packages to your local machine.

**NPX** - NPX stands for node package executable. It allows developers to execute any Javascript Package available on the NPM registry without even installing it.

**fs** - fs is a library that gives u high level constructs to do filesystem stuff (read from a file, write from a file...)

**What is express** - Express is a library that gives you high level constructs to create http servers.

**Send status code** - res.status(401).send("Hello World")

---

**Bash and Terminal Command -**

- pwd - Prints the working directory
- cd - Change directory
  - cd ../../ -> To move back to 2 levels back down the directory hierarchy
- ls - Listing all the files in the current directory

  - ls -l -> To list all the files with complete information
  - ls -R -> To list all the files including the files present in the sub-directories
  - ls -t -> To list the files that are last modified fast
  - ls -a -> To list all the hidden files as well
  - ls -la
  - ls -lRa -> To list all the files which are present in sub-directories as well
  - ls -lr -> To display in reverse order of what the files are modified at.
  - ls \*.json -> To list dowm all the JSON files

- mkdir - Make directory
- touch - It helps to create an empty file
- cat - It is used to print the content of the file
- vi - It is the vim command. It lets you to edit the file
  - vi a.txt - It will open the txt file
  - Press i - It is used to enable the insert mode
  - Press esc button to come out of insert mode
  - Type :q to quit the insert mode (Quit -> No changes made)
  - Or Type :q! to quit if the previous command is not working. It will not save the file and quit without saving the file. (Quit without saving)
  - :wq! - To quit and save the file (Force Write and Quit)
  - :wq - Write and Quit
- mv - It is used to move file from one folder to another
- cp - It is used to copy the file
  - cp a3.txt test2 -> copy the a3.txt file to test2 folder
  - cp -r test3 test2 -> used to copy the test3 folder into test2 (-r flag is used when you are copying the folder)
- clear - It is used to clear the terminal
- rm - It is used to delete the file
  - rm -r frontend -> To delete the folder
- echo - To display the message on the terminal
- history - To view the history of all the command

---

- There are 3 kinds of permission - READ, WRITE and EXECUTE
- chmod - Change File Permission  
  Modify the read, write and execute permission of a file  
  First thing, we have to specify is that who is it that we want to change the permission for  
  Second thing, we have to specify if we are adding the permission or removing the permission
  - chmod u+x filename

---

How to create a bash script ?

- Create a newscript.sh as a filename
- In this script line, first line should be #!/bin/bash
- To run the script file, type bash newscript.sh

---

- nvm - node version manager - It lets you to install node in your machine.
- node - It lets you start the node shell which gives you a playground where you can write javascript code.  
  It is also used to run the javascript file.
- npm - node package manager - It helps you to bring the node packages locally on your machine.

---

**Installation of node in MAC**

- Install homebrew
- brew install node
- Add some changes in your bash file (i.e .zshrc file)

---

**Few Ways in which user can give an input when they are sending the request to you**

- Query Parameter -> After question part, put your values

  - Example - http://localhost:3000/?n=3&a=2
  - Catch the query params -> rec.query.n
  - For get request, client sent the data using query params

- Body -> For post request, you send the data in the body
  - Body is an another place where you can put the data

**Creating a wildcard route ->**

```js
app.get("/files/:fileName", function (req, res) {
  const name = req.params.fileName;
});
```

---

**GitHub Notes**

- Git Initialisation

  - git init
  - ls -la -> To check .git file
  - master is the central branch by default
  - git status
  - git add .
  - git rm --cached fileName -> To unstage the particular file
  - git commit -m "message"
  - git push
  - git remote -v
  - git remote add origin REMOTE_LINK
  - git push
  - git push origin master
  - git push --set-upstream origin master

- Cloning the repository

  - git clone REMOTE_URL
  - When we have clone the repo, we don't have to set the remote url using the (git remote add origin REMOTE_LINK) command

- How you can authenticate your local github client to be able to make this commit

  - Using SSH keys to authenticate and sign all of those commit
  - Add a new SSH keys to your github account to make the connection between local computer and remote repository - Command -> ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
  - GitHub Doc Link -> ([**link**](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=mac))
  - ![Preview](/git_ssh.png)
  - Type command -> (ls -la) to view the pub file. (For example, the fileName is testauthkey.pub)
  - cat testauthkey.pub -> To view the ssh key
  - Copy the public key to the clipboard
  - Add the SSH Keys to the GitHub account ([**Github Link**](https://github.com/settings/keys))

- Git Branching

  - You create a feature branch to add your changes and testing it before merging it to master branch.
  - git checkout -b feature_update_files
  - git checkout master
  - git diff feature_update_files
  - git push --set-upstream origin feature_update_files
  - Or git push -u origin feature_update_files
  - git branch -d feature_update_files
  - git merge main -> ❌ You're currently on another branch (e.g., feature-xyz), and you want to bring all the latest changes from main into it.

- Pull Request

  - If you are not owner of the repository, and someone else has to review your code and then the code will be added to the repository. Then, you can create you pull request.  
    Anybody who reviews your code will merge your code to master.
  - Raise a PR and create a pull request

- Git Merge Conflict

  - These conflicts can arise at two main points during the merge process:

    1. While starting the merge process -> <br>

       - Git will not start the merge if your working directory has unsaved or staged changes.
       - Git requires a "clean working directory" before performing a merge to avoid mixing pending changes with incoming commits.
       - Git halts the process and asks you to commit or stash your changes. Once your working directory is clean, you can try the merge again.

    2. During the merge process -> <br>

       - A conflict occurs when the same part of a file has been changed differently in both branches.
       - Git will try to auto-merge as much as it can but will flag the files it can't resolve.
       - You must open the conflicted file and manually choose or combine changes.
       - After resolving, you run git add <file> and then git commit.

  - ✅ Summary
    | **Scenario** | **What Happens** | **Resolution** |
    | ------------------ | --------------------------------------- | -------------------------- |
    | Starting the merge | Merge is blocked due to unsaved changes | Commit or stash changes |
    | During the merge | Merge continues but halts at conflicts | Manually resolve conflicts |

  - HEAD is the pointer which is pointing to the master branch

  - **🛠️ Git Commands to Resolve Conflicts**

    - **`git log --merge`**: Produces the list of commits that are causing the conflict.
    - **`git diff`**: Identifies the differences between the states of repositories or files.
    - **`git checkout`**: Used to undo the changes made to the file or to switch branches.
    - **`git reset`**: Used at the time of a merge conflict to reset the conflicted files to their original state.
    - **`git reset --mixed`**: Used to undo changes to the working directory and staging area.
    - **`git merge --abort`**: Helps in exiting the merge process and returning to the state before the merge began.

  - **Issues in GitHub**

    - Issues are used to track bugs, tasks, enhancements, feature requests, or questions within a repository.
    - Issues can me mentioned in a pull request and cross-link in the PR
    - ✅ Syntax and Examples
    - | Linked Issue Type         | Syntax                                  | Example                                                        |
      | ------------------------- | --------------------------------------- | -------------------------------------------------------------- |
      | Issue in the same repo    | `KEYWORD #ISSUE-NUMBER`                 | `Closes #10`                                                   |
      | Issue in a different repo | `KEYWORD OWNER/REPOSITORY#ISSUE-NUMBER` | `Fixes octo-org/octo-repo#100`                                 |
      | Multiple issues           | Use full syntax for each issue          | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100` |

    - Common Keywords

      - `close`, `closes`, `closed`
      - `fix`, `fixes`, `fixed`
      - `resolve`, `resolves`, `resolved`
