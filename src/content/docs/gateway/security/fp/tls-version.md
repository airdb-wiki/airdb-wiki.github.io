---
title: HTTPS - TSL 指纹 version
description: HTTPS - TSL 指纹 verion
---


## TLS Versions

| Version | Vaule | Comment |
| ----    | ----- |    ----- |
| SSL 2.0 | 0x0002 (2 decimal) | Deprecated in 2011 |
| SSL 3.0 | 0x0300 (768 decimal) | Deprecated in June 2015 |
| TLS 1.0 | 0x0301 (769 decimal) | Deprecated in January 2020 |
| TLS 1.1 | 0x0302 (770 decimal) | Deprecated in January 2020 |
| TLS 1.2 | 0x0303 (771 decimal) | in use |
| TLS 1.3 | 0x0304 (772 decimal) | in use |

<https://docs.microsoft.com/en-us/dotnet/api/system.security.authentication.sslprotocols?view=net-5.0>

## TLS Cipher Suites

IOS: 默认使用 NSURLSession 网络调用

<https://developer.apple.com/documentation/foundation/nsurlsession>

Android: 碎片化比较多，不同的厂商有不同的实现。还有可能刷机的用户自己修改了默认的配置。

Browser: 一般使用操作系统的默认配置，依赖系统 openssl 库，要对指纹浏览器进行探测。

## Fake Fingerprint

- python: <https://github.com/wangluozhe/requests-go>
- go: <https://req.cool/docs/tutorial/tls-fingerprint/>
