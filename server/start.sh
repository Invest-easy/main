#!/bin/bash
PATH_TO_FILE=$(pwd)
cd PATH_TO_FILE
# Checks for dependencies, if not found, it installs them
npm install

echo 'Packages installed/found'

# Starts the server
npm run devStart

