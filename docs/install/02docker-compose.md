# docker-compose 部署

## 前置条件

- 请准备一台 linux 环境，2cx4Gx50G;
- docker `v18.06+`
- jenkins `v2.0+` 请参看 [jenkins的配置](../guide/02.jenkins-requirements.html)
- harbor `v1.6.0+`
- kubernetes `v1.12.0+`
## 安装过程

### 1.下载安装包

```bash
$ wget https://github.com/go-atomci/atomci/releases/download/v1.29.2/atomci-latest-docker-compose.tgz
```

```sh
# 安装docker-compose
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
```

### 2. 安装包目录结构

```sh
---- atomci-latest  #
 |__ conf           # 后端的示例配置文件
 |__ nginx          # 前端nginx示例配置文件
 |__ mysql          # mysql
 |__ init.sh        # 部署初始化脚本
 |__ docker-compose.yml  # docker-compose启动文件
```

### 3. 应用启动

```sh
## 启动所有容器
$ docker-compose up -d
```

### 4. 应用初始化

```
$ bash init.sh
```

### 5. 确认服务状态/应用访问

```sh
$ docker-compose ps
```

::: tip

默认会侦听`8090`端口，可以通过 `http://[deploy-ip-addr]:8090` 来开启 **atomci** 的旅程(:

默认用户名及密码: `admin` / `123456`
:::

## 部署视频

<iframe src="//player.bilibili.com/player.html?aid=547966151&cid=407287108&page=1" scrolling="no" width="800px" height="600px" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 下一步

完成自定义环境配置，run **atomci** in real world. 参考[快速开始](/guide/01quickstart.html)，

## 附录

### Jenkins agent 容器化配置

- [service account 验证信息说明](https://github.com/warm-native/docs/tree/master/topic002/deploy)

- [如何配置 jenkins 与 k8s 集成，bilibili 视频链接](https://www.bilibili.com/video/BV1A5411V7zm/)

### 卸载应用

```sh
# 停止服务
$ docker-compose stop

# 删除服务容器
$ docker-compose rm -f

# 清除数据目录
$ rm -f mysql/data
```
