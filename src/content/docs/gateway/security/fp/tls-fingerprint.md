---
title: TLS Fingerprint
description: TLS Fingerprint
---

TLS Fingerprint

<https://xz.aliyun.com/t/2531>

<https://pkg.go.dev/crypto/tls#ClientHelloInfo>

<https://developers.cloudflare.com/bots/>

Cisco ssl fingerprint is a more complete implementation
<https://resources.sei.cmu.edu/asset_files/Presentation/2019_017_001_539902.pdf>

HTTPS 温故知新（三） —— 直观感受 TLS 握手流程(上)
<https://halfrost.com/https_tls1-2_handshake/>

HTTPS 温故知新（四） —— 直观感受 TLS 握手流程(下)
<https://halfrost.com/https_tls1-3_handshake/>

HTTPS 温故知新（六） —— TLS 中的 Extensions
<https://halfrost.com/https-extensions/>

## 指纹类型

INVALID: 不合法
BOT
Browser
Empty
Unkown

defensive security
<https://www.defensive-security.com/blog/hiding-behind-ja3-hash>

openssl s_client
ssldump
tshark
tcpdump

```
Extension: padding (len=203)
    Type: padding (21)
    Length: 203
    Padding Data: 000000000000000000000000000000000000000000000000000000000000000000000000…

771,4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,0-23-65281-10-11-35-16-5-13-18-51-45-43-27-17513-21,29-23-24,0

17513-21 (application_setting, padding)
```

<https://imququ.com/post/optimize-tls-handshake.html>

<https://icefrozen.github.io/article/tcpip-4-SSL-TLS-3/>

TLS 常见的攻击举例

- Heartbleed（心脏出血）
- Replay Attacks（重放攻击）
- 降级攻击(FREAK，LogJam 和 CurveSwap)

TlsCipherSuite Enum
<https://learn.microsoft.com/en-us/dotnet/api/system.net.security.tlsciphersuite?view=net-7.0>

<https://scrapfly.io/web-scraping-tools/ja3-fingerprint>

ios cipher values
<https://developer.apple.com/documentation/security/1550981-ssl_cipher_suite_values>

<https://www.ssllabs.com/ssltest/analyze.html?d=google.com>

OpenSSL:
<https://www.openssl.org/docs/man1.1.1/man3/SSL_CTX_set_session_ticket_cb.html>

<https://www.openssl.org/docs/man1.1.1/man3/SSL_client_hello_get0_ciphers.html>
