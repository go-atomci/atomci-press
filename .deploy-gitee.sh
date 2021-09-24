#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build

# 进入生成的文件夹
cd docs/.vuepress/dist

#创建.nojekyll 防止Github Pages build错误
touch .nojekyll

git init
git add -A
git config user.name 'colynn'
git config user.email 'colynn.liu@gmail.com'
git commit -m 'deploy'

# git push -f "https://${access_token}@github.com/go-atomci/atomci-press.git" master:gh-pages
git push -f "https://gitee.com/goatom/atomci-press.git" master:gh-pages

cd -
