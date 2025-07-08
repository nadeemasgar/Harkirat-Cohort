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