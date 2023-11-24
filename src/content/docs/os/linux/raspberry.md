---
title: Raspberry 树莓派
description: Raspberry 树莓派
---

树莓派系统烧录

<https://stepneverstop.github.io/burn-system2raspberry-in-macos.html>

## 系统配置

重新插拔 usb

```
cd /Volumes/boot  # 进入根系统
````

### 配置网络

wpa_supplicant.conf

``
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant Group=netdev
update_config=1

network={
 ssid="Wifi1的名字"
 psk="密码"
 priority=优先级，越大越优先
}

network={
 ssid="Wifi2的名字"
 psk="密码"
 priority=优先级
}

```


### 开启 sshd 服务
```

touch ssh

```


### 显示器无输出
解决树莓派4B外接显示屏没反应, 追加如下内容到 config.txt 目录

```

hdmi_force_hotplug=1
config_hdmi_boost=4
hdmi_group=2
hdmi_mode=9
hdmi_drive=2
hdmi_ignore_edid=0xa5000080
disable_overscan=1

```

### homebrige

https://github.com/oznu/docker-homebridge/wiki/Homebridge-on-Raspberry-Pi


## Bluetooth

树莓派（Raspberry Pi 4）开启和连接蓝牙
https://blog.csdn.net/Cool2050/article/details/105615831
