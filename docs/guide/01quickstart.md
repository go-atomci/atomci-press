# 快速开始

## 视频介绍

<iframe src="//player.bilibili.com/player.html?aid=420715943&cid=413510859&page=1" scrolling="no" width="800px" height="600px" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 1. 服务集成配置

### 1.1 服务集成列表

![服务集成](../assets/guide/service-inter.png)

### 1.2 新建-服务集成

#### kubernetes 配置集成

![新建服务集成配置](../assets/guide/service-inter02.png)

#### jenkins 配置集成

> 如何生成Jenkins API Token 参考下图

![新建服务集成配置](../assets/guide/jenkins/service-integrate03-01.png)

![新建服务集成配置](../assets/guide/service-inter03.png)

#### Registry 配置集成

![新建服务集成配置](../assets/guide/service-inter04.png)

::: tip

- 支持`kubernetes`、`jenkins`、`Registry` 这三种类型的配置集成；
- 必须配置至少一个`jenkins`、`Registry`, `kubernetes`类型可以根据需要添加；
- 另外 Jenkins 的 kubernetes 的授权配置请查看 [github](https://github.com/warm-native/docs/tree/master/jenkins/topic002/deploy)
- Registry 支持自建 Harbor、阿里云容器服务、腾讯云容器服务等，注意如果容器服务没有配置 https 域名的，请将“是否 HTTPS”设置为关闭状态
  :::

## 2. 创建项目

![创建项目](../assets/guide/project01.png)

## 3. 配置项目环境/项目流程

![创建项目](../assets/guide/project02.png)

### 3.1 新建环境

![创建项目](../assets/guide/project03.png)

### 3.2 新建流程

![创建项目](../assets/guide/project04.png)

### 3.3 流程配置

![创建项目](../assets/guide/project05.png)

![创建项目](../assets/guide/project06.png)

![创建项目](../assets/guide/project07.png)

## 4. 应用代码配置

### 4.1 关联代码仓库

![创建项目](../assets/guide/project08.png)

### 4.2 同步代码源

> ![创建项目](../assets/guide/project09.png)

![创建项目](../assets/guide/project10.png)

::: tip

- 目前支持 `gitlab`/`github`
- 输入`仓库的主地址`/`用户名`/`Token信息`即可完成同步，为了更多的维护代码安全，这些配置信息是项目纬度的，不同项目需要独立配置．

:::

### 4.3 应用编排配置

![创建项目](../assets/guide/project11.png)

![创建项目](../assets/guide/project12.png)

::: tip

- 应用编排 yaml 为云原生的 kuernetes yaml 模板．

:::

## 5.创建流水线

![创建项目](../assets/guide/project13.png)

![创建项目](../assets/guide/project14.png)

::: tip

- 流水线创建好后，根据流水线的不同的阶段会显示允许的`操作`动作,

:::

## 6.应用服务

![创建项目](../assets/guide/project15.png)

::: tip

- 应用服务可以查看服务状态，水平扩展，重启，删除等．

:::
