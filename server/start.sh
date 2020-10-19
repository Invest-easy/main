#!/bin/bash
PATH_TO_FILE=$(pwd)
echo $PATH_TO_FILE
cd PATH_TO_FILE
# Checks for dependencies, if not found, it installs them
npm install
echo ''
echo 'Packages installed/found'

# Starts the server
npm run devStart

