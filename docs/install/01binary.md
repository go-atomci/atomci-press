# 二进制安装

## 前置条件

- 请准备一台 linux 环境，2cx4Gx50G;
- mysql `5.7.8+`
- jenkins `v2.0+`
- harbor `v1.6.0+`
- kubernetes `v1.12.0+`

## 安装流程

### 1.下载二进制文件

```bash
$ wget
```

### 2.应用配置

1. 服务端配置

   - 修改`[db]`的配置，将`url`改为自己环境内的 mysql 信息
   - 修改`[jwt]`的配置，将 `secret` 改为自定义的随机字符串，保证系统的安全性
   - 修改`[atomci]`的配置， 将`url`改为部署主机的 IP 及端口信息

2. 前端 nginx 配置

```conf

```

### 3.应用初始化

```bash
$ ./cli init --token=[token-get-from-sysuser-table]
```

### 4.应用启动

```bash
# 仅启动服务端
$ ./atomci
```

> 前端是以静态文件依托于`nginx`服务来呈现的，所以直接启动`nginx`即可启动前端服务.

### 5.应用访问

> 根据提示访问 AtomCI 系统验证安装结果

## 附录

### 应用示例配置及参数说明

```conf
[default]
appname = publishctl
httpport = 8080
runmode = dev
copyrequestbody = true


[DB]
url = root:root@tcp(127.0.0.1:3306)/atomci?charset=utf8mb4
debug = false
rowsLimit = 5000
maxIdelConns = 100
maxOpenConns = 200

[jwt]
secret = changeme

# build/deploy callback
[atomci]
url = http://localhost:8080


[defaultImages]
jnlpImageAddr = 10.151.3.75:5000/library/jenkins:jnlp-debug
kanikoImageAddr = 10.151.3.75:5000/library/kaniko-executor:latest

[log]
logfile = "log/atomci.log"
level = 7
separate = ["error"]


[k8s]
configPath = ./conf/k8sconfig

[ldap]
host = ldap.xxx.com
port = 389
bindDN = ldap@xx.com
bindPassword = Xxx..,
userFilter = (samaccountname=%s)
baseDN = OU=Xxx,DC=xx,DC=com
```
