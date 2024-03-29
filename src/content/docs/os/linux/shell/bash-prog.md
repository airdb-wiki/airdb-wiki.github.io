---
title: bash programming
description: bash programming
---

Bash Programming

## 学习地址

[BASH Programming - Introduction HOW-TO](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)

## 编程规范

[Google Shell Code Style](https://google.github.io/styleguide/shell.xml)

```bash
#/bin/bash
declare -a conns=(50 100 200 500 1000 1500)

for conn in ${conns[@]}; do 
    echo $conn
done
```

## 一些 Debug 技巧

```bash
set -x
set -e
export PS4='+${BASH_SOURCE}:${LINENO}:${FUNCNAME[0]}: '
echo "Today is $(date %Y-%m-%d)"
set +x
```

说明： PS4 The value of this parameter is expanded as with PS1 and the value is printed before each command bash displays during an execution trace. The first character of PS4 is replicated multiple times, as neces-sary, to indicate multiple levels of indirection. The default is ”+ ”.

::: tip
日志输出

```bash
_log() {
    if [ "$_DEBUG" == "true" ]; then
        echo 1>&2 "$@"
    fi
}

```

:::
