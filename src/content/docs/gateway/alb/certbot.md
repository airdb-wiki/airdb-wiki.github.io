---
title: Certbot
description: A reference page in my new Starlight docs site.
---

Certbot

<https://eff-certbot.readthedocs.io/en/stable/install.html>

```bash
docker run -it --rm --name certbot \
            -v "/etc/letsencrypt:/etc/letsencrypt" \
            -v "/var/lib/letsencrypt:/var/lib/letsencrypt" \
            certbot/certbot certonly
```

```bash
$ certbot certonly \
 --authenticator certbot-dnspod \
 --certbot-dnspod-credentials /srv/dnspod.ini \
 --email tech@airdb.net \
 --cert-name wildcard.airdb.dev \
 -d airdb.dev  \
 -d *.airdb.dev \
 --preferred-challenges dns -n --expand \
 --agree-tos \
 --server https://acme-v02.api.letsencrypt.org/directory \
 --reuse-key
```
