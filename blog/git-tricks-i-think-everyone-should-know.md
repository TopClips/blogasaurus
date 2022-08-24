---
author: Palash Shrivastava
author_title: Owner
author_url: https://github.com/battleofplassey
author_image_url: https://avatars.githubusercontent.com/u/35087196?v=4
tags:
- blog
- git
- programming
- vcs
keywords:
- blog
- git
- programming
- vcs
description: Blog By Palash Shrivastava
hide_table_of_contents: false
slug: git-tricks
title: GIT tricks I think everyone should know
draft: true

---
<!--truncate-->

### 1. Install GitLens

[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) is a VSCode extension. This has been a lifesaver for me and my team. It works beautifully with vscode. I can compare commits, code from different branches, check current blame by just hover, manage stashes, check blame, heatmap, file-changes, push & pull code etc with so much ease. Git is no more God's way of semantic versioning.

### 2. Moving or Migrating GIT stashes from old computer to new.

* First, List all your stashes.

```bash 
L:\Project1> git stash list
stash@{0}: On parallax-effect-feature: setting aside animated feature code
stash@{1}: On parallax-effect-feature: testing parallex
```

* Second, Export to Patch files. You'll have to specify your stash ID and provide a name for your patch file. Do this for the stashes you want to move.

```bash 
git stash show -p stash@{0} > AnimatedPatch
git stash show -p stash@{1} > ParallexPatch
```

* Patch files will be created in your pwd. Copy the patch file in new directory in the new machine.
* Finally, Apply your stashes and finally Re-Stash them

```bash
cd /new/project/dir
git apply AnimatedPatch
git stash
git apply ParallexPatch
git stash
```

### 3. GIT add all and commit in 1 line

```bash
git commit -am "add all and commit"
```
