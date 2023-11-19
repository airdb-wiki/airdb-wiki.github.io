---
title: 开发部署
description: 本文档介绍了如何在本地开发和部署网站。
---

开发环境包括 个人 Mac 电脑 和 测试 Linux 服务器，系统架构可能为 ARM 或者 X86 架构，系统版本可能为 MacOS 或者 Linux。

由于系统不同， 操作系统存在目录不同，为统一规划，兼容 MacOS 和 Linux, 我们使用以下目录规范。

- 源代码存放在 /opt/src/$project 目录。
- 服务部署在 /opt/svc/$project 目录。
- 系统级或者网络服务遵循 Linux 目录规范。