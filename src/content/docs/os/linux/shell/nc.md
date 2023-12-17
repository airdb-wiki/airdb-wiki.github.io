---
title: nc
description: netcat
---

nc

```bash
nc -vz 192.168.0.10 80

## Connection to 192.168.0.10 80 port [tcp/http] succeeded!
## google.com (74.125.200.101:443) open
## nc: bad address 'google1.com'
## nc: google.com (74.125.68.139:22): Operation timed out
## nc just output empty result
```

其中，-v选项用于打印详细的扫描结果；-z选项用于指定使用0 I/O数据模式。主机名可以是域名或IP地址，端口号可以是数字或服务名称。

如果端口开放，输出信息中会显示"succeeded"或"open"。

如果端口关闭，输出信息中会显示"refused"。
