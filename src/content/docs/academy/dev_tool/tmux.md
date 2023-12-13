---
title: tmux 工具
description: tmux 工具
---

tmux 解决屏幕比例不协调的问题

现象：屏幕分辨率或者窗口大不一致时，屏幕会被限制在一个很小的范围，其他地方全部变成 "." 或者 "烫"

解决办法：再次进入 tmux 后，执行如下命令

```bash
tmux new -s [your_tmux_name]
tmux a -d -t [your_tmux_name]

# 例如
tmux new -s dean
tmux a -d -t dean
```
