---
title: Docker
description: Docker
---


## 基础镜像制作

- <https://github.com/moby/moby/blob/master/contrib/mkimage-yum.sh>
- <https://github.com/gliderlabs/docker-alpine/blob/master/builder/scripts/mkimage-alpine.bash>

## docker 清理

```bash
docker system ls
docker volume ls
docker network ls
docker context ls
```

# Docker 屏幕显示问题

```
sudo docker exec -it -e COLUMNS=$(tput cols) -e LINES=$(tput lines) airdb/go bash
```

[docker examples](https://github.com/airdb/docker)

[docker tutorial](https://www.simplilearn.com/tutorials/docker-tutorial/what-is-docker-container)

## Install docker and docker compose

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo   "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null


sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

## Run Docker as a non-root user (Rootless model)

<https://docs.docker.com/engine/security/rootless/>

Manage Docker as a non-root user
<https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user>

Run the Docker daemon as a non-root user (Rootless mode)
<https://docs.docker.com/engine/security/rootless/>
