---
title: tcpdump
description: tcpdump 抓包
---


## 抓取 Client Hello

```bash
sudo tcpdump "tcp port 443 and (tcp[((tcp[12] & 0xf0) >>2)] = 0x16) && (tcp[((tcp[12] & 0xf0) >>2)+5] = 0x01)" -w client-hello.pcap

sudo tcpdump "host dean.airdb.dev && tcp port 443 and (tcp[((tcp[12] & 0xf0) >>2)] = 0x16) && (tcp[((tcp[12] & 0xf0) >>2)+5] = 0x01)
```

## 抓取 udp dns 包

```bash
sudo timeout 60 tcpdump -i any -n  port 53
sudo tcpdump -i any -nn udp and port 53
sudo tcpdump -i bond0.1000  -nnAAAA  | grep -A 20 -B 3  airdb.io
```

## wireshake filters

```txt
tls.handshake.extensions_server_name == "ja3.airdb.dev"
ssl.handshake.type == 1 && ip.dst == 127.0.0.1
```
