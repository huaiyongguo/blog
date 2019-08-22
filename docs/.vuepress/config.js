module.exports = {
    title: 'hyg的web之路', // 设置网站标题
    description: 'Personal Website',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', {
            rel: 'icon',
            href: '/images/logo.png'
        }],
        ['link', {
            rel: 'manifest',
            href: '/images/logo.png'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: '/images/logo.png'
        }],
        ['meta', {
            'http-quiv': 'pragma',
            cotent: 'no-cache'
        }],
        ['meta', {
            'http-quiv': 'pragma',
            cotent: 'no-cache,must-revalidate'
        }],
        ['meta', {
            'http-quiv': 'expires',
            cotent: '0'
        }]
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '', // 部署到github相关的配置
    themeConfig: {
        nav: [ // 导航栏配置
            {
                text: 'HTML',
                link: '/HTML/'
            },
            {
                text: 'CSS',
                link: '/CSS/'
            },
            {
                text: 'JS',
                link: '/JS/'
            },
            {
                text: 'Other',
                link: '/Other/'
            }
        ],
        sidebar: [{
                title: 'HTML', // 侧边栏名称
                collapsable: true, // 可折叠
                children: [
                    '/HTML/', // 你的md文件地址
                ]
            },
            {
                title: 'CSS',
                collapsable: true,
                children: [
                    '/CSS/',
                ]
            },
            {
                title: 'JS',
                collapsable: true,
                children: [
                    '/JS/',
                ]
            },
            {
                title: 'Other',
                collapsable: true,
                children: [
                    '/Other/',
                ]
            },
        ]
    }
}