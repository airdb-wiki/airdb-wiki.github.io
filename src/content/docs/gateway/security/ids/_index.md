---
title: Example Reference
description: A reference page in my new Starlight docs site.
---

---

title:  用户行为安全
---

## 爬虫检测技术

- 行为检测: 通过分析网页上用户的操作（鼠标的移动、点击、滚动行为和浏览行为）来判断操作者是否是机器控制的网络爬虫。

- 指纹识别: 通过分析设备和浏览器的信息来判断访问者是否为网络爬虫。

虽然指纹识别有被攻破和绕过的可能，但是指纹识别相较于行为检测，可以比较快速地对访问者做出识别和判断，将那些看了几篇教程就撸起袖子一通乱干的爬虫死死地摁在地上。

## JA3(s) 的使用原理

Q: 为什么 Ja3 的计算结果能够用于识别 TSL/SSL 指纹信息？
A: 这其实源于John Althouse的一个研究结果：**同一个服务器对同一个客户端的多次请求返回相同的响应信息。**

## Ja3 不同

1. chrome

指纹:
192,
0-4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,
0-23-65281-10-11-35-16-5-13-18-51-45-43-27-21,
29-23-24,
0

edge

192,
0-4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,
0-23-65281-10-11-35-16-5-13-18-51-45-43-27-17513-21,
29-23-24,
0

新版edge也是用的chromium的内核，Extention扩展多了一个17513

csharp的HttpClient
指纹:
3072,
49196-49195-49200-49199-159-158-49188-49187-49192-49191-49162-49161-49172-49171-157-156-61-60-53-47-10,
0-10-11-13-35-23-65281,
29-23-24,
0

4. Fiddler

指纹:
3072,
49196-49195-49200-49199-159-158-49188-49187-49192-49191-49162-49161-49172-49171-157-156-61-60-53-47-10,
0-10-11-13-35-23-65281,
29-23-24,
0

因为Fiddler是csharp写的，应该用的都是微软的封装的ssl实现吧。 所以和csharp的HttpClient是一样的指纹。

java JDK自带的HttpsURLConnection

指纹:
3072,
49187-49191-60-49189-49193-103-64-49161-49171-47-49156-49166-51-50-49195-49199-156-49197-49201-158-162-49160-49170-10-49155-49165-22-19-255,
10-11-13,
23-1-3-19-21-6-7-9-10-24-11-12-25-13-14-15-16-17-2-18-4-5-20-8-22,
0

明显可以看出来 EllipticCurve 多了很多！

[区分指纹](https://www.cnblogs.com/yudongdong/p/14855507.html)

IDS Intrusion Detection System
[改进的TLS指纹增强用户行为安全分析能力](http://www.jsjkx.com/CN/article/openArticlePDF.jsp?id=18951)

[通过-ja3s-实现-tls-指纹识别](https://www.guildhab.top/2021/04/通过-ja3s-实现-tls-指纹识别)

[JA3(S)，简单而有效的 TLS 指纹](https://www.tr0y.wang/2020/06/28/ja3/)

[nginx-ssl-ja3](https://github.com/fooinha/nginx-ssl-ja3)

[混淆加密流量规避检测：黑客利用加密流量趋势明显](https://www.secrss.com/articles/11014)

[SSL-指纹识别和绕过](https://ares-x.com/2021/04/18/SSL-指纹识别和绕过)

[浏览器指纹追踪技术简述](https://juejin.cn/post/6844903970180169742)

[TLS Fingerprinting in the Real World](https://blogs.cisco.com/security/tls-fingerprinting-in-the-real-world)

[Python常见的反爬手段和反反爬虫方法](https://bbs.huaweicloud.com/blogs/270253)

[爬虫风险管理](https://www.alibabacloud.com/zh/products/antibot)

[基于Web的爬虫识别算法](https://patents.google.com/patent/CN105930727A/zh)
