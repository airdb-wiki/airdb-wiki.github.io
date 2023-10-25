---
title:  http service
description: http service
---

http api 是我们最常用的一种 api，通常用于统计、监控、管理等场景，非常容易管理。
但同时也有一些问题，容易存在滥用和安全问题。

## 内部外部区分

by default, all of the api are external
but we can use `/internal`  as internal api.

```text
/internal/api/v1/
```

如果 `/internal/`  api, 则只能内网访问， 需要在网关侧配置。

常见的场景有：

```text
/internal/metrics
/internal/healthz
/internal/admin/xxx
```
