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

Get the project

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

### GIS deps

```bash
brew install postgresql postgis
pg_ctl -D /usr/local/var/postgres/data -l /usr/local/var/postgres/server.log start
```

## Starting

```bash
yarn start-all
```

A page should open in your browser at localhost:3000, then you can open:
```
http://localhost:8080/graphiql
```
To be able to discover the project schema.

## Commands

Generating a new test
```bash
blender -b -P test2.py
```

# Working with postgis

Finding which GDAL drivers are installed (in case of rt_raster_to_gdal: Could not load the output GDAL driver)
```sql
SELECT short_name FROM ST_GDALDrivers();

ALTER SYSTEM SET postgis.gdal_enabled_drivers TO 'ENABLE_ALL';
SELECT pg_reload_conf();

SELECT oid, lowrite(lo_open(oid, 131072), GTiff) As num_bytes
 FROM
 ( VALUES (lo_create(0),
   ST_AsTIFF( (SELECT rast FROM terrain WHERE rid=1) )
  ) ) As v(oid,GTiff);

SELECT lo_export(18186, '/Users/vincent/projects/node-procgen-editor/public/test.tif');
```

```bash
gdal_translate -scale 0 2470 0 65535 -ot UInt16 -outsize 100 100 -of ENVI public/assets/test.tif public/assets/test.bin

color-relief public/assets/test.tif data/color-relief.txt public/assets/test-relief.tif

gdaldem hillshade -combined public/assets/test.tif public/assets/test-hillshade.tif

gdaldem slope public/assets/test.tif public/assets/test-slope.tif
gdaldem color-relief public/assets/test-slope.tif data/color-slope.txt public/assets/test-slopeshade.tif
```
Tif -> PNG
```bash
gdal_translate -of PNG -scale public/assets/test.tif public/assets/test-output.png
```
Generate mask
```bash
gdaldem color-relief public/test-bicolor.tif data/color-relief-0-1.txt public/assets/test-relief-bicolor.tif
gdal_translate -of PNG -scale public/assets/test-relief-bicolor.tif public/assets/test-output-bicolor.png
```

Preview all the values in a raster :

```sql
SELECT (pvc).*
FROM (SELECT ST_ValueCount(rast) As pvc
    FROM terrain WHERE rid=1) As foo
    ORDER BY (pvc).value;
```

## Project References
[Create React App](https://github.com/facebookincubator/create-react-app)
[Blender 2.78c Documentation](https://docs.blender.org/api/blender_python_api_2_78c_release/)
[Visualize your assets online: A360.AutoDesk](https://a360.autodesk.com/viewer/)
[Postgis Raster Doc](https://postgis.net/docs/using_raster_dataman.html)
[Texturing a raster](http://blog.mastermaps.com/2013/10/textural-terrains-with-threejs.html)