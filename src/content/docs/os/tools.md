---
title:  虚拟机工具
description: 虚拟机工具
---

虚拟机工具主要用来学习和研究
虚拟机可以让用户在一台物理计算机上运行多个操作系统，每个操作系统运行在一个独立的虚拟机中。
这使得用户可以同时运行不同操作系统的软件，例如 Windows、Linux、Mac OS 等。

同时，如果虚拟机被破坏，只需要重新创建即可，不影响物理机系统。

随着 docker 容器方案的出现，当前大多数 linux 环境都可以基于 docker 进行轻量虚拟化。

## OrbStack

<https://docs.orbstack.dev/quick-start>

## Vagrant

Step 1: Setup

- Install [vagrant](https://www.vagrantup.com/downloads.html)

Step 2: Prepare for Vagrant

```bash
git clone https://github.com/airdb/docker
cd docker/vagrant
```

or

```bash
wget https://raw.githubusercontent.com/airdb/docker/master/vagrant/Vagrantfile -p $your_vagrant_path
```

Step 3: Create vms and Deploy service

```bash
  vagrant up
  vagrant status
  vagrant ssh
```

Step 4: Clean bad vagrant information.

`vagrant global-status --prune`

## Virtualbox

<https://www.virtualbox.org/wiki/Downloads>
