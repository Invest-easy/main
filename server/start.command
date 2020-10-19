#!/bin/bash
PATH_TO_FILE=/Users/hderoche/Documents/GitHub/main/server
echo $PATH_TO_FILE
echo ''
echo ''
cd $PATH_TO_FILE

# Checks for dependencies, if not found, it installs them
npm install
echo ''
echo 'Packages installed/found'

# Starts the server
npm run devStart

