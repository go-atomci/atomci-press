// var nav = require('./nav.js')
// var { EcosystemNav, ComponentNav } = nav

// var utils = require('./utils.js')
// var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  markdown: {
    lineNumbers: true
  },
  title: 'AtomCI',
  description: 'A magical vue admin',
  base: '/atomci-press/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    // [
    //   'script',
    //   {},
    //   `
    // var _hmt = _hmt || [];
    // (function() {
    //   var hm = document.createElement("script");
    //   hm.src = "https://hm.baidu.com/hm.js?f98a2f382011d17906899de9f676b294";
    //   var s = document.getElementsByTagName("script")[0]; 
    //   s.parentNode.insertBefore(hm, s);
    // })();
    //     `
    // ]
  ],
  themeConfig: {
    repo: 'go-atomci/atomci-press',
    docsRepo: 'go-atomci/atomci-press',
    lastUpdated: '上次更新',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    algolia: {
      apiKey: '',
      indexName: 'atomci'
    },
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '安装',
            link: '/install/'
          },
          {
            text: '使用',
            link: '/guide/'
          },
          {
            text: '支持',
            items: [
              { text: '技术交流', link: '/support/'},
              { text: '常见问题', link: '/support/faq.html'}
            ]
          },
        ],
        sidebar: {
          '/install/': [
            {
              title: '安装',
              collapsable: false,
              children: ['/install/']
            },
          ],
          '/guide/': [
            {
              title: '使用',
              collapsable: false,
              children: genEssentialsSidebar()
            }
          ],
          '/support/': [
            {
              title: '支持',
              collapsable: false,
              children: [
                '/support/'
              ]
            }
          ]
        }
      },
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      description: 'AtomCI'
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  // ga: 'UA-109340118-1'
}

function genEssentialsSidebar(type = '') {
  const mapArr = [
    '/guide/',
    '/guide/00features.md',
    '/guide/01quickstart.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}