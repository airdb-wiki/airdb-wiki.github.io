---
title:  http service
---


# 接口命名规范

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
