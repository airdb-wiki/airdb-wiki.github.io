---
title: git
description: git
---

Git

### Branch Naming

```txt
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

## Git Command

1. Maintain a repo without permission

```bash
git remote add upstream https://github.com/bfenetworks/bfe.git
## a
git fetch upstream
git checkout develop

git merge upstream/develop
## or
git rebase upstream/develop
## Refer: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork


## b
git pull ups master
git rebase ups/master
https://levelup.gitconnected.com/how-to-update-fork-repo-from-original-repo-b853387dd471
```

2. git config setting

```bash
git config --global core.hooksPath .github/hooks
git config --global core.excludefile .gitignore_global
git config --global url.'ssh://git@github.com'.insteadOf https://github.com
```

3. Github Commit. For Close Github Issue, commit message should as follow:

```bash
close #x
closes #x
closed #x
fix #x
fixes #x
fixed #x
resolve #x
resolves #x
resolved #x
add new quick sort algorithm, fixes #4, resolve #6, closed #12
```

```bash
git submodule update --init -f  vendor/github.com/mholt/caddy
git remote add ups https://github.com/airdb/b
git push -u ups local_branch:master -f
```

4. Github Command Line

```bash
brew install github/gh/gh
gh --repo bbhj/lbs issue status
gh --repo bbhj/lbs issue view 1
```

5. Delete branch or tag

```bash
git branch -D dev
git push origin --delete dev

git tag -d v1.0
git push --delete origin v1.0
```

6. submodule

```bash
git submodule update --init --recursive --remote
```

Push Branch to Another Branch

```bash
git push <remote> <local_branch>:<remote_name>
```

Push Branch to Another Repository

```bash
git push <remote> <branch>
```

## Github

For now, we can use `gh` command for few git operation.
Rerfer [here](https://github.com/cli/cli)

## Semantic Commit Messages

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

## github下fork后如何同步源的新更新内容

```bash
git remote -v

git remote add upstream  https://github.com/bfenetworks/bfe

## 同步 fork
git fetch upstream

## 切换到 upstream 分支
git checkout upstream/develop

## 将 upstream 分支 push 到 fork 项目对应分支
git push origin upstream/develop:develop -f
```

References:

- <https://www.conventionalcommits.org/>
- <https://seesparkbox.com/foundry/semantic_commit_messages>
- <http://karma-runner.github.io/1.0/dev/git-commit-msg.html>
