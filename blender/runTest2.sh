#!/bin/sh

blender -P /vagrant/blender/test2.py --background

cp -f test2.dae ../editor/app/data/test2.dae