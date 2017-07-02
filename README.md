# node-procgen

Procedural generation tool

What does it do?

It allows you to setup a pipeline to procedurally generate scenes that will be available trough an API.

![Scene generation main page](/data/screenshots/2.png)

More here :

[Project Screenshots](/data/screenshots)
[Project 3D Assets](/data/3dassets)

## Table of Contents

- [Install](#install)
- [Project References](#project-references)

## Install

*All instructions are for Ubuntu 16.04*

```bash
apt-get install git curl
```

*node & npm & yarn*
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
vim ~/.bashrc
#Add at the end of the file:
alias npm-exec='PATH=$(npm bin):$PATH'
npm-exec
:wq #Then save and quit
source ~/.bashrc
nvm install 7
nvm use 7
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

The fact that we are watching on client and server files make that we open a LOT of files.
Be sure to run this command when running the project on Ubuntu or you may have this error :

*"Error: watch /home/cold/projects/editor/node_modules/.cache/babel-loader/xxx.json.gz ENOSPC"*

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

Get project

```bash
git clone git@github.com:vincentdesmares/node-procgen-editor.git
cd node-procgen-editor
yarn
yarn start
``` 

### Python deps

```bash
sudo apt-get install -y python-pip python-dev python-pycurl 
/usr/bin/python -m pip install pylint
```

Install last blender :
```bash
ppa:thomas-schiex/blender
sudo apt-get install blender
```

## Starting

```bash
yarn start-all
```

## Commands

Generating a new test
```bash
blender -b -P test2.py
```

## Project References
[Create React App](https://github.com/facebookincubator/create-react-app)
[Blender 2.78c Documentation](https://docs.blender.org/api/blender_python_api_2_78c_release/)
[Visualize your assets online: A360.AutoDesk](https://a360.autodesk.com/viewer/)