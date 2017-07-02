# node-procgen

Procedural generation tool

What does it do?

It allows you to setup a pipeline to procedurally generate scenes that will be available trough an API.

![Scene generation main page](/screenshots/2.png)

More here :

[Project Evolution](/screenshots)

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
source ~/.bashrc
nvm install 7
nvm use 7
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
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

## Commands

Generating a new test
```bash
blender -b -P test2.py
```

## Project References
[Create React App](https://github.com/facebookincubator/create-react-app)
[Blender 2.78c Documentation](https://docs.blender.org/api/blender_python_api_2_78c_release/)