follow steps on GitHub to initialize a repo and link it from local to remote

1. git add .
2. git commit -m "what we did"
3. git push

1. git checkout -b make-a-new-branch
1a. (add, commit, push (x-times))
2. git checkout develop
3. git merge feature-branch
4. git push

// In our previous gitflow:
// develop branch, commit 1,2,3 (code by Patrick)
// feature branch, commit 4,5 (code by Patrick)
// merge into develop and we have 1,2,3,4,5 (code by Patrick)

// In our new gitflow:
// develop branch, commit 1,2,3 (code by Patrick)
// style feature branch, commit 4,5,6 (code by Harmit)
// js feature branch, commit 4,5,6 (code by Patrick)
// Harmit merge into develop: 1,2,3,4,5,6
// Patrick LOCAL develop branch is still 1,2,3
// Patrick merge into develop: 1,2,3,4,5,6
// WHEN PATRICK GOES TO PUSH HIS DEVELOP BRANCH TO REMOTE


// New additional workflow:
// 1. `git pull` from branch we need to work with

// NOTE: if we want someone else's remote branch, `git fetch`

// some random change