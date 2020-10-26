#!/bin/bash -e
# Put the path to your server folder here
PATH_TO_FILE=/Users/hderoche/Documents/GitHub/main/server
# Starts the server/Install/Check the packages
(cd $PATH_TO_FILE; npm install; npm run devStart)

