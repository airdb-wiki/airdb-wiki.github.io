---
title: Hello, World!
description: This is a page in my Starlight-powered site
---

如何参与贡献

- Github 提交 PR, 地址: github.com/airdb/fun
- Github 提交 issues, 地址: github.com/airdb/fun/issues
- 写邮件给 <info@airdb.com>

Github 如何提交 PR

> **Tip for new contributors:**
> Take a look at [https://github.com/firstcontributions/first-contributions](https://github.com/firstcontributions/first-contributions) for helpful information on contributing.

- step 1:

  Fork GitHub 上的 Repository 到贡献者的 Repository

- step 2:

  clone 代码到本地 git clone github.com/airdb/fun

- step 3:

  检查当前 Git Repository

```bash
git remote  -v
origin    https://github.com/airdb/fun (fetch)
origin    https://github.com/airdb/fun (push)
```

- step 4:

  新建立贡献者 Git Repository 的连接

```bash
git remote add pullrequest https://github.com/deanchina/docs
```

- step 5:

  新建工作分支

```bash
git checkout -b dev

git branch
* dev
  master
```

- step 6:

  修改文件

- step 7:

  提交到贡献者 Github 上

```bash
git add .
git commit -m"pull request"
```

- step 8

  发起 PR (Pull Request)
  登录 GitHub Repository 点击Pull Requests, 再点击New pull requests按钮
