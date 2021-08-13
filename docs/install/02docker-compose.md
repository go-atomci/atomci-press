# docker-compose部署

## 前置条件

- 请准备一台 linux 环境，2cx4Gx50G;
- docker `v18.06+`
- dokcer-compose
- jenkins `v2.0+`
- harbor `v1.6.0+`
- kubernetes `v1.12.0+`


## 安装流程

### 1.下载安装包

```bash
$ wget https://github.com/go-atomci/atomci-press/releases/download/1.0.0/atomci-1.0.0-docker-compose.tgz
```

### 2. 安装包目录结构

```sh
---- atomci-1.0.0   #
 |__ conf           # 后端的示例配置文件
 |__ nginx          # 前端nginx示例配置文件
 |__ mysql          # mysql
 |__ docker-compose.yml  # docker-compose启动文件
```

