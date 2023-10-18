---
title: Hello, World!
description: This is a page in my Starlight-powered site
---

# Ubuntu FAQ

## 更新证书链问题

```bash
 apt list --installed | grep ca-certificates

 apt-get update
 DEBIAN_FRONTEND=noninteractive apt-get install -y --reinstall ca-certificates
```
