---
title: Example Reference
description: A reference page in my new Starlight docs site.
---

# Http Flow

```bash
tcpdump -XvvennSs 0 -i eth0 tcp[20:2]=0x4745 or tcp[20:2]=0x4854

# 0x4745 为"GET"前两个字母"GE"
# 0x4854 为"HTTP"前两个字母"HT"
```

[goreplay](https://github.com/buger/goreplay)

![](./go-replay.jpg)
