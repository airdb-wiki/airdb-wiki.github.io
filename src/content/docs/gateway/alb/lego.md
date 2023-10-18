---
title: Example Reference
description: A reference page in my new Starlight docs site.
---

# Lego

<https://github.com/go-acme/lego>

```bash
export TENCENTCLOUD_SECRET_ID=AKIDxxxx \
export TENCENTCLOUD_SECRET_KEY=xxxx \
```

sigle domain

```bash
lego --email xxx@gmail.com --dns tencentcloud --domains=*.domain1.com run

lego --email xxx@gmail.com --dns tencentcloud --domains=*.domain1.com run \
--days=30 --renew-hook="nginx -s reload"
```

mutiple domains

```bash
lego --email xxx@gmail.com --dns tencentcloud --domains=*.domain1.com --domains=*.domain2.com run

lego --email xxx@gmail.com --dns tencentcloud --domains=*.domain1.com --domains=*.domain2.com \
renew --days=30 --renew-hook="nginx -s reload"
```
