---
title: openssl
description: openssl
---

```bash
$ openssl commands

        openssl x509 -text -in ssl.chain.crt
        openssl req  -noout -text -in ssl.csr
        openssl s_client -servername www.airdb.com -connect www.airdb.com:443 </dev/null 2>/dev/null

        Check Keypair 1
        openssl rsa -pubout -in privkey.pem
        openssl x509 -pubkey -noout -in fullchain.pem

        Check keypair 2
        diff -eq <(openssl x509 -pubkey -noout -in fullchain.pem) <(openssl rsa -pubout -in privkey.pem)

        cert -f md www.airdb.com
        Refer: https://github.com/genkiroid/cert

Check Client Hello:
        sudo ssldump -i  lo
        curl -k <https://127.0.0.1:8443> | hexdump -C

Lego:
        <https://github.com/go-acme/lego>

        lego --email xxx@gmail.com --dns tencentcloud --domains=*.domain1.com --domains=*.domain2.com \
                renew --days=30 --renew-hook="nginx -s reload"

```
