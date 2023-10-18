---
title: Example Reference
description: A reference page in my new Starlight docs site.
---

# TCP 流量

## 录制 Clien Hello

```bash
sudo tcpdump tcp port 443 and host dean.airdb.dev -w dump.pcap

sudo tcpdump "tcp port 443 and (tcp[((tcp[12] & 0xf0) >>2)] = 0x16) && (tcp[((tcp[12] & 0xf0) >>2)+5] = 0x01)" -w client-hello.pcap
```

## 回放 Client Hello

tcpreplay是一系列工具的集合。包括（tcpprep、tcprewrite、tcpreplay和tcpbridge）
其中tcpreplay是真正实现流量回放功能的工具，其他几个工具可以看作tapreplay的辅助工具，作为流量重放前期的准备工作，比如
tcpprep可以划分哪些包是client的, 哪些是server的, 一会发包的时候client的包从一个网卡发, server的包可能从另一个网卡发。
tcprewrite可以就是修改2层, 3层, 4层报文头部，也就是可以将IP，MAC等信息修改为你期望的值。

官网： <http://tcpreplay.appneta.com/>

Quick started

```bash
# 查看网卡信息
tcpreplay --listnics 

# 重放
tcpreplay -i eth0 p.pcap

#将 p.pcap 文件进行 tcpprep 操作，制作 cache 文件。
tcpprep -an client -i p.pcap -o p.cache –v
```

## tcpprep

tcpprep：根据pcap文件，生成一个cache文件。将pacp数据包分解为客户端和服务器端。这个cache文件中保存着tcprewrite怎么修改报文，以及tcpreplay怎么发送报文的规则。也就是说，在你捕获的报文中有很多报文，这些报文可能有不同的源和目的（可能单播，可能广播），现在要确立一套规则，来规定你所捕获的报文，怎么个分发流程。

```bash
# 根据源 IP
tcpprep -c 10.5.8.244/24 -i mysql.pcap -o mysql.cach

# 自动模式
tcpprep -a client -i mgcp.pcap -o mgcp.cach
```

## tcprewrite

<https://tcpreplay.appneta.com/wiki/tcprewrite>

```bash
tcprewrite --option1=xxx --option2=xxx  -c input.cache -i input.pcap -o out.pcap

tcprewrite --enet-smac=host_src_mac,client_src_mac \
            --enet-dmac=host_dst_mac, client_dst_mac \
            --endpoints=host_dst_ip:client_dst_ip \
            --portmap=old_port1:new_port1 old_port2, new_port2 \
            -i input.pcap -c input.cach -o out.pcap
```

### 最少有两个参数

--infile = input.pcap。原始数据包。
--outfile=output.pcap。修改之后的数据包。

### 修改木洞主机MAC和源MAC

tcprewrite --enet-dmac=00:55:22:AF:C6:37 --enet-smac=00:44:66:FC:29:AF  --infile=input.pcap --outfile=output.pcap

### 802.1Q VLAN tag信息的处理

删除：tcprewrite --enet-vlan=del --infile=input.pcap --outfile=otput.pcap
添加：tcprewrite --enet-vlan=add --enet-vlan-tag=40 --enet-vlan-cfi=1 --enetvlan-pri=4 --infile=input.pcap --outfile=output.pcap

### 修改IP地址

将10.0.0.0/8网段的IP替换为172.16.0.0/12，将192.168.0.0/16网段IP替换为172.168.0.0/12。
tcprewrite --pnat=10.0.0.0/8:172.16.0.0/12,192.168.0.0/16:172.168.0.0/12 --infile=input.pcap --outfile=output.pcap
随机生成源IP：
tcprewrite --seed=423 --infile=input.pcap --outfile=output.pcap

修改端口号
tcprewrite --portmap=80:8080,22:8022 --infile=input.pcap --outfile=output.pcap
tcpprep -p --pcap=vxlan_test1.pcap --cachefile=test1.cache

tcprewrite --cachefile=test1.cache --endpoints="192.168.252.18:192.168.252.17" --infile=vxlan_test1.pcap --outfile=testvx1.pcap

```bash
# 强制计算传输层校验和:
tcprewrite --fixcsum --infile=mysql.pcap --outfile=mysql.pcap

```

[Tcpreplay 重放数据](https://www.i4k.xyz/article/u012206617/86558728)
