---
title: Supervisor
description: supervisor
---

Supervisor 是用 Python 开发的一套通用的进程管理程序，能将一个普通的命令行进程变为后台 daemon，并监控进程状态，异常退出时能自动重启。
目前 Supervisor 可以运行在大多数 Unix 系统上, 我们主要在 docker 容器中使用此工具。

使用场景：管理多个进程，保证进程不死，自动重启，自动启动。

## 安装

```bash
apt install supervisor
```

## 配置

```conf
# 配置文件
#/etc/supervisor/supervisord.conf
#/etc/supervisor/conf.d/supervisord.conf

[program:theprogramname]
command=/bin/cat              ; 程序运行命令，建议使用绝对路径。
process_name=%(program_name)s ; 程序名称，可用的变量有 `group_name`, `host_node_name`, `process_num`, `program_name`, `here`（配置文件目录）。 一般程序需要运行多个副本的情况会使用。后面会有例子。
numprocs=1                    ; 程序运行的副本个数，默认为1，如果值大于1，则`process_name` 必须包含 `%(process_num)s`
numprocs_start=0              ; `%(process_num)s`起始数字，默认为0
00=/tmp                       ; 程序运行的所在目录，相当于先cd到指定目录，然后运行程序。
umask=022                     ; umask for process (default None)
priority=999                  ; 程序操作的的优先级，例如在start all/stop all,高优先级的程序会先关闭和重启。
autostart=true                ; 在supervisord启动时自动启动，默认为true
startsecs=1                   ; 程序启动前等待时间等待时间。默认为1。
startretries=3                ; 尝试重启最大次数。默认为3。
autorestart=unexpected        ; 是否自动重启，可选参数为 false, unexpected, true。如果为false则不自动重启，如果为unexpected表示如果程序退出信号不在 `exitcodes` 中，则自动重启。默认为unexpected
exitcodes=0,2                 ; 程序退出码。配合`autorestart`使用。默认为 0,2
stopsignal=QUIT               ; 杀死进程时发送的信号，默认为TREM。
stopwaitsecs=10               ; 发送SIGKILL信号前最大等待时间。默认为10。
user=dev                      ; 以指定用户身份启动程序。默认为当前用户。
stopasgroup=false             ; 是否向子进程发送停止信号，这对于Flask的debug模式很有用处，如果设置为true，则不向子进程发送停止信号。默认为false
killasgroup=false             ; 是否向子进程发送kill信号，默认为false
redirect_stderr=false         ; 将错误输出定向到标准输出，默认为false
stdout_logfile=/a/path        ; 标准输出日志路径，可选参数为 `自定义` `AUTO` `NONE`，`自定义`将日志写到自定义路径，可用的变量有`group_name`, `host_node_name`, `process_num`, `program_name`, `here`（配置文件目录）；`NONE`不创建日志；`AUTO` 又supervisord自动选择路径，并且当supervisord服务重新启动时原来自动创建的日志以及日志的备份文件会被删除。默认为AUTO
stdout_logfile_maxbytes=1MB   ; 标准输出日志单个文件最大大小，如果超过指定大小会将日志文件备份，可用的单位 KB MB GB。如果设置为0则表示不限制文件大小。默认为50MB
stdout_logfile_backups=10     ; 标准输出日志文件最大备份数。默认为10
stdout_capture_maxbytes=1MB   ; 当进程处于“stdout capture mode”模式下写入到FIFO队列最大字节数，可用单位 KB MB GB。默认为0，详细说明见[capture-mode](http://supervisord.org/logging.html#capture-mode)
stdout_events_enabled=false   ; 
;以下配置项配置错误输出的日志参数。和上面标准输出配置相同。
stderr_logfile=/a/path        ;
stderr_logfile_maxbytes=1MB   ;
stderr_logfile_backups=10     ;
stderr_capture_maxbytes=1MB   ;
stderr_events_enabled=false   ;
environment=A="1",B="2"       ; 环境变量设置，可用的变量有 `group_name`, `host_node_name`, `process_num`, `program_name`, `here`。 默认为空。
serverurl=AUTO                ; override serverurl computation (childutils)
```

## 启动

```bash
supervisord -c /etc/supervisor/supervisord.conf
```
