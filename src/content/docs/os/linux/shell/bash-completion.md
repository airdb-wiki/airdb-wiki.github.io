---
title: Hello, World!
description: This is a page in my Starlight-powered site
---

# Bash Command for Developer

-----

### Bash Completion

[Reference](https://sourabhbajaj.com/mac-setup/BashCompletion/)

Bash completion is a bash function that allows you to auto complete commands or arguments by typing partially commands or arguments, then pressing the [Tab] key. This will help you when writing the bash command in terminal.

#### Installation

```bash
brew install bash-completion
```

Bash completion will be installed in /usr/local/etc/bash_completion.d.
For it to work, add this to your ~/.bash_profile:

```bash
echo "[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion" >> ~/.bash_profile
```

Restart your bash session:

```
source ~/.bash_profile
```

#### More

You can list additional completion packages are available by typing:

```bash
brew search completion
```

And you can install them using brew install commands, for example:

```bash
brew install docker-completion
```

You can also manually add a bash completion file into ```/usr/local/etc/bash_completion.d```
