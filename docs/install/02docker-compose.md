# docker-compose 部署

## 前置条件

- 请准备一台 linux 环境，2cx4Gx50G;
- docker `v18.06+`
- jenkins `v2.0+`
- harbor `v1.6.0+`
- kubernetes `v1.12.0+`

## 安装流程

### 1.下载安装包

```bash
$ wget https://github.com/go-atomci/atomci-press/releases/download/1.0.0/atomci-1.0.0-docker-compose.tgz
```

```sh
# 安装docker-compose
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
```

### 2. 安装包目录结构

```sh
---- atomci-1.0.0   #
 |__ conf           # 后端的示例配置文件
 |__ nginx          # 前端nginx示例配置文件
 |__ mysql          # mysql
 |__ init.sh        # 部署初始化脚本
 |__ docker-compose.yml  # docker-compose启动文件
```

### 3. 应用启动

```sh
## 启动mysql
$ docker-compose up -d

## 启动服务端
$ docker-compose up -d atomci

## 启动前端
$ docker-compose up -d frontend
```

### 4. 应用初始化

```
$ bash init.sh
```

### 5. 应用访问

::: tip

默认会侦听8090端口，可以通过 http://localhost:8090 或是 http://[local-ip]:8090 来开启atomci的旅程
:::


##　附录

### 卸载应用
```sh
# 停止服务
$ docker-compose stop

# 删除服务容器
$ docker-compose rm -f

# 清除数据目录
$ rm -f mysql/data
```