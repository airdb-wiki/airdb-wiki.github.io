---
title: Docker
description: Docker
---


docker 清理

```bash
docker system prune
docker volume prune
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
