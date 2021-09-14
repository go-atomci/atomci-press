# 二进制部署

## 前置条件

- 请准备一台 linux 环境，2cx4Gx50G;
- mysql `5.7.8+`
- jenkins `v2.0+`
- harbor `v1.6.0+`
- kubernetes `v1.12.0+`

## 安装流程

### 1.下载安装包

```bash
# amd64
$ wget https://github.com/go-atomci/atomci-press/releases/download/1.0.0/atomci-linux_amd64.tgz

# arm64
$ wget https://github.com/go-atomci/atomci-press/releases/download/1.0.0/atomci-linux_amd64.tgz
```

### 2. 安装包目录结构

```sh
---- amd64   # arch
 |__ atomci             # 后端服务端程序
 |__ app.conf.sample    # 后端的示例配置文件
 |__ dist.tgz           # 前端静态文件
 |__ atomci-nginx.conf  # 前端nginx配置文件
```

### 3.应用配置

1. 解压安装包

```sh
$ tar -zxvf  atomci-linux_amd64.tgz
```

1. 服务端配置

   - 修改`[db]`的配置，将`url`改为自己环境内的 mysql 信息
   - 修改`[jwt]`的配置，将 `secret` 改为自定义的随机字符串，保证系统的安全性
   - 修改`[atomci]`的配置， 将`url`改为部署主机的 IP 及端口信息

```sh
# 拷贝应用的示例配置文件
$ cp conf/app.conf.sample  conf/app.conf
```

2. 前端 nginx 配置及启动

::: tip

1. 此处使用的是 nginx 的默认路径`/usr/share/nginx/html`, 也可以根据需求修改自定义的路径；
2. 请确保你部署的服务器，nginx 配置会包含 `include /etc/nginx/conf.d/*.conf`， 否则请将
   `atomci-nginx.conf` 移至相应可以被 nginx 识别到的路径。
   :::

```sh
$ tar -zxvf dist.tgz -C  /usr/share/nginx/html

# 拷贝应用的nginx配置文件
$ cp atomci-nginx.conf   /etc/nginx/conf.d/

```

### 4.应用启动

```bash
# 检查nginx语法
$ nginx -t

# 重启nginx，使新增的前端配置生效
$ nginx -s reload

# 仅启动服务端
$ ./atomci
```

### 5.应用初始化

```bash
$ wget https://github.com/go-atomci/atomci-press/releases/download/1.0.0/cli
$ ./cli init --token=[token-get-from-sysuser-table]
```

> 仅需要执行一次即可，注意在启动 `atomci`应用服务之后，执行初始化.

### 6.应用访问

> 根据提示访问 AtomCI 系统 `http://ip:8081` 验证安装结果, 默认用户名密码: `admin`/`123456`

## 附录

### 应用示例配置及参数说明

```conf
# app default setting
[default]
appname = atomci
httpport = 8080
runmode = prod
copyrequestbody = true


# db settings
[DB]
url = root:root@tcp(127.0.0.1:3306)/atomci?charset=utf8mb4
debug = false
rowsLimit = 5000
maxIdelConns = 100
maxOpenConns = 200

# jwt secret 
[jwt]
secret = changeme

# build/deploy callback
[atomci]
url = http://localhost:8081


# jenkins default jnlp/ kaniko image defined.
[defaultImages]
jnlpImageAddr = 10.10.2.60:5000/library/jenkins:jnlp-debug
kanikoImageAddr = 10.10.2.60:5000/library/kaniko-executor:latest

[log]
logfile = "log/atomci.log"
level = 7
separate = ["error"]


[k8s]
configPath = ./conf/k8sconfig

# ldap settings
[ldap]
host = ldap.xxx.com
port = 389
bindDN = ldap@xx.com
bindPassword = Xxx..,
userFilter = (samaccountname=%s)
baseDN = OU=Xxx,DC=xx,DC=com
```
