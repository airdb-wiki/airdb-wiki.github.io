---
title: Ubuntu OS init
description: Ubuntu 初始化
---

当前 team 主要使用 ubuntu 系统 + docker(rootless) 进行运维开发环境的维护。

## Step1: 登录服务器, 配置 ssh key，配置 sudo

```bash
sudo useradd -m -k /etc/skel/ -s /bin/bash  ubuntu
```

使用 adb host key 获取全量成员的 ssh key, 并配置到服务器上。

## Step2: 配置 .config

从git 仓库中拉取 .config 文件，配置到服务器上。

```bash
git clone https://github.com/airdb/.config ~/.config
```

## step3： docker 安装

- docker initstall: <https://docs.docker.com/engine/install/ubuntu/>
- docker rootless: <https://docs.docker.com/engine/security/rootless/>
