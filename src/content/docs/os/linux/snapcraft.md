---
title: Hello, World!
description: This is a page in my Starlight-powered site
---

# Ubuntu Snapcraft

```
snapcraft push --release edge *.snap
Pushing airdb_1.0_amd64.snap
After pushing, an attempt will be made to release to 'edge'
Preparing to push '/home/ubuntu/airdb/airdb_1.0_amd64.snap' to the store.
Pushing airdb_1.0_amd64.snap [===================================================================================================================] 100%
Processing...|
Ready to release!
Revision 1 of 'airdb' created.
Track    Arch    Channel    Version    Revision
latest   amd64   stable     -          -
                 candidate  -          -
                 beta       -          -
                 edge       1.0        1
The 'edge' channel is now open.
```

```
snap/snapcraft.yaml

name: airdb
version: '1.0'
summary: An interactive web server.
description: |
  HTTPLab let you inspect HTTP requests and forge responses.

confinement: devmode
#base: core18

parts:
  airdb-adb:
    plugin: nil
    source: http://ftp.gnu.org/gnu/hello/hello-2.10.tar.gz
    plugin: autotools

apps:
  airdb:
    command: bin/hello
```

# Commands

```
snapcraft  register xxx-project
snapcraft clean airdb-adb -s pull
snapcraft push stable stable  *.snap
snapcraft push --release edge *.snap
```
