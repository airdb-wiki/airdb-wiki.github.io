---
title: minio
description: minio
---

# minio

## Basic Usage

```bash
wget https://dl.min.io/client/mc/release/linux-amd64/archive/mc.RELEASE.2019-10-02T19-41-02Z
wget https://dl.min.io/client/mc/release/linux-amd64/mc
```

```bash
mc config host add <bucketname> https://s3.github.com <accessKey> <secretKey>
mc ls s3/backup
```

# Tecent cos

<https://cloud.tencent.com/developer/article/1982033>

```bash
git clone https://github.com/minio/mc

./mc-for-cos alias set s3 http://cos.ap-shanghai.myqcloud.com <TENCENTCLOUD_SECRET_ID> <TENCENTCLOUD_SECRET_KEY>
```
