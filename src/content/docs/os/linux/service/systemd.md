---
title: Hello, World!
description: This is a page in my Starlight-powered site
---

systemctl
systemctl 是 Linux 系统中用于管理 systemd 单元的命令。systemd 是 Linux 系统中的系统和服务管理器，它负责管理系统的启动、运行和关闭。systemctl 命令可以用于启动、停止、重启、查看状态以及管理 systemd 单元。

使用场景：

- 物理主机或者云主机系统管理
- 支持用户态服务管理
- 支持系统服务管理

```bash
systemctl restart airdb-caddywaf-live.service
```

```bash
sudo loginctl enable-linger ubuntu
systemctl --user restart airdb-caddywaf-live-sg.service
```
