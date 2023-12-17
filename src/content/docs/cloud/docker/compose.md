---
title: Docker Compose 
description: Docker Compose
---

使用 docker compose 来管理单机容器，或者开发环境非常方便。

## Tips

我们使用了 `make` + `docker compose` 的 方式来管理我们的开发环境。

- make: <https://www.computerhope.com/unix/umake.htm>
- docker compose: <https://docs.docker.com/compose/gettingstarted/#step-4-build-and-run-your-app-with-compose>

## FAQ

1. 容器中如何连接其他容器， 比如 db 和 redis
   - 使用 另外一个容器的容器名即可，docker container 中做了映射。  参考：<https://nayak.io/posts/docker-compose-postgres-and-connection-refused/>

2. 本地磁盘使用越来越多
   比如数据库和日志等，非常的消耗磁盘空间。  可以使用 docker volume 来管理。
