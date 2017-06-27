This project was bootstrapped with .

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

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

## Project References
[Create React App](https://github.com/facebookincubator/create-react-app)