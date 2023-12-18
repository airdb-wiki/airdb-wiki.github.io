---
title: bash
description: bash
---

Bash

CMD ["/bin/bash", "--login", "--init-file", "/etc/profile"]

## Profile 执行顺序

Invoked as an interactive login shell, or with --login
When Bash is invoked as an interactive login shell, or as a non-interactive shell with the --login option, it first reads and executes commands from the file /etc/profile, if that file exists. After reading that file, it looks for ~/.bash_profile, ~/.bash_login, and ~/.profile, in that order, and reads and executes commands from the first one that exists and is readable.

登录 Linux 时，首先启动 /etc/profile 文件，然后再启动用户目录下的
~/.bash_profile、 ~/.bash_login或 ~/.profile文件中的其中一个, 一般还会执行
~/.bashrc文件。

~/.bash_logout，每次退出系统或退出bash shell时,执行该文件。

❗️注意: 部分系统只读取~/.bashrc (不读取 ~/.bash_prfoile), 如 BusyBox

## Bash 环境变量

```txt
# 公共
$LOGNAME: 登录用户名
$HOME: 当前用户家目录
```

```bash
export PS1="[\u@\H \W]\\$ "
export HISTTIMEFORMAT="%F %T `whoami` "
export TMOUT=600    # 600 秒内用户无操作就字段断开终端
```

## 常用别名

```bash
alias ipsort="sort -t"." -k1,1n  -k2,2n  -k3,3n  -k4,4n"
alias ipsortr="sort -t"." -k1,1nr -k2,2nr -k3,3nr -k4,4nr"
```

## 常用命令

```bash
date +"%s"      # uninx timestamp
date -d @1548987653     # linux, unix timestamp 转 "Fri Feb  1 10:20:53 CST 2019"
sudo date -d 1548987653 # mac, unix timestamp 转 "Fri Feb  1 10:20:53 CST 2019"
jq  # Command-line JSON processor, Download from https://github.com/stedolan/jq
```

## history

```bash
HISTSIZE=5000
HISTFILESIZE=10000
export PROMPT_COMMAND="history -a; history -c; history -r; $PROMPT_COMMAND"
```

TMOUT=300

The TMOUT variable uses a number of seconds of idle time. In this case, 300 seconds is five minutes. You can set this value to any number of seconds. This value will take effect on the next log on for all users. To set individual timeout values, use .bashrc but realize that users may change this file at will.
