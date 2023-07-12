# Setting Up a Group Project with GitHub

Step 1: Set up a local development environment by installing GitHub. I have already installed GitHub.

Step 2: Create a new repository on GitHub and invite the collaborators under the settings tab in the repo. Select "Add people" under the manage access option.

Step 3: Add the files you'll need for the project. You do this by clicking in the "Add file" tab. This is where you add the tools you'll need for the project. You can add a complete scaffold for the project at this point.

Step 4: Create issues that the team can work on.

Step 5: You can now clone the repository into you local development environment. To do this, start by:

 - Creating a new directory in your local environment. 
 - Clone the GitHub repository into that directory by typing "git clone" and pasting the clone link you copied from the repo.
 - Now you have a local copy of the repo that you can work on. 

# GitHub Workflow
The best way to work on a group repository looks like this:

1. Create a branch to avoid working on the master branch directly. This is the recommended way of working with group projects. You can do this in two ways:
 - git checkout -b <branch-name> - this creates a new branch and immediately switched to it. 
 - git branch <branch-name> - this creates a branch only

 So in my case, I'll create a branch called navbar and switch to it.
I don't have to git pull after creating a local branch because I already created it in my local environment.

NOTE: Git pull works for when you create a GitHub branch.







