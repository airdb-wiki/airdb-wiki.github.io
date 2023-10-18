---
title: Example Reference
description: A reference page in my new Starlight docs site.
---

Base64 入侵

[PyPI 官方仓库遭遇request恶意包投毒](https://security.tencent.com/index.php/blog/msg/160)

[dean.airdb.local test]$ echo -e  "import os; os.system(\"ls\")"  | base64
aW1wb3J0IG9zOyBvcy5zeXN0ZW0oImxzIikK

[dean.airdb.local test]$ python -c "import base64; exec(base64.b64decode('aW1wb3J0IG9zOyBvcy5zeXN0ZW0oImxzIikK'))"
test test.log

[dean.airdb.local test]$ echo -e  aW1wb3J0IG9zOyBvcy5zeXN0ZW0oImxzIikK | base64  -d
import os; os.system("ls")
