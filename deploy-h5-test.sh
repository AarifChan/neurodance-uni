#!/bin/bash

git pull
node -v
npm -v
pnpm -v
rm -rvf dist/dist/h5
pnpm install
pnpm run build:h5
tar -czvf ./dist.tar.gz --no-xattrs dist/build/h5/
scp ./dist.tar.gz swd:/home/dev/h5/
ssh swd "/home/dev/h5/run-web.sh"
rm -rf ./dist.tar.gz
