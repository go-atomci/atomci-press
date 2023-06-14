(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{199:function(e,t,s){e.exports=s.p+"assets/img/jenkins-enable-anony.e2809b69.png"},200:function(e,t,s){e.exports=s.p+"assets/img/k8s-auth.55183437.png"},201:function(e,t,s){e.exports=s.p+"assets/img/k8s-cloud-setup.8ca2eca2.png"},210:function(e,t,s){"use strict";s.r(t);var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"jenkins-环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-环境配置"}},[this._v("#")]),this._v(" Jenkins 环境配置")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_1-确认安装依赖插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-确认安装依赖插件"}},[this._v("#")]),this._v(" 1. 确认安装依赖插件")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_2-开启匿名用户的可读权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-开启匿名用户的可读权限"}},[this._v("#")]),this._v(" 2. 开启匿名用户的可读权限")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("为了保证 流水线的 日志详情可以正常打开")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(199),alt:"Image"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_3-jenkins-正确配置kubernetes-cloud"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-jenkins-正确配置kubernetes-cloud"}},[this._v("#")]),this._v(" 3. jenkins 正确配置kubernetes cloud")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_3-1-创建-service-account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-创建-service-account"}},[this._v("#")]),this._v(" 3.1 创建 service account")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("创建jenkins连接至kubernetes的auh信息")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("注意默认授权的是"),t("code",[this._v("devops")]),this._v(" 命名空间，可以根据需要修改")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_3-2-配置-jenkins-credentials"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-配置-jenkins-credentials"}},[this._v("#")]),this._v(" 3.2 配置 Jenkins Credentials")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("获取 service account auth信息")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ kubectl -n devops describe secrets $(kubectl -n devops describe serviceaccounts jenkins-admin  |grep \"Tokens:\" | awk -F':'  '{print $2}')\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("创建 "),t("strong",[this._v("Secret text")]),this._v(" 类型的Credentials")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(200),alt:"Image"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_3-3-jenkins-add-kubernetes-cloud"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-jenkins-add-kubernetes-cloud"}},[this._v("#")]),this._v(" 3.3. Jenkins add kubernetes cloud")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(201),alt:"Image"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("注意")]),this._v(": 这里使用的"),t("code",[this._v("Kubernetes Namespace")]),this._v(" 注意要和创建的 service account的 namesapce一致。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"附录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[this._v("#")]),this._v(" 附录")])}],r=s(0),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://plugins.jenkins.io/kubernetes",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubernetes"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://plugins.jenkins.io/workflow-aggregator",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pipeline"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://plugins.jenkins.io/blueocean",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blue Ocean"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://plugins.jenkins.io/http_request",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP Request Plugin"),s("OutboundLink")],1)])]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),s("blockquote",[s("p",[e._v("请根据"),s("code",[e._v("jenkins")]),e._v("部署在k8s的集群内或外选择"),s("a",{attrs:{href:"https://github.com/warm-native/docs/tree/master/jenkins/topic002/deploy/incluster",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("incluster")]),s("OutboundLink")],1),e._v(" or "),s("a",{attrs:{href:"https://github.com/warm-native/docs/blob/master/jenkins/topic002/deploy/outcluster",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("outcluster")]),s("OutboundLink")],1)])]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),s("ol",[s("li",[e._v("详细流程请参看-"),s("a",{attrs:{href:"https://www.bilibili.com/video/BV1A5411V7zm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何配置 jenkins 与 k8s 集成，bilibili 视频链接"),s("OutboundLink")],1)])])])}),n,!1,null,null,null);t.default=i.exports}}]);