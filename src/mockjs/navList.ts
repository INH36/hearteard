import type { MockMethod } from "vite-plugin-mock";

export default [
    {
        url: '/api/getNavInfo1',
        method: 'get',
        response: () => {
            return {
                code: 200,
                mes: 'ok',
                data: [
                    {
                        key: 102300001,
                        name: "推荐",
                        title: "recommend",
                        icon: "icon-tuijian",
                    },
                    {
                        key: 102300002,
                        name: "热门",
                        title: "hot",
                        icon: "icon-sousuoremenfenlei",
                    },
                    {
                        key: 102300003,
                        name: "食品",
                        title: "food",
                        icon: "icon-shouyeshipin",
                    },
                    {
                        key: 102300004,
                        name: "游戏",
                        title: "game",
                        icon: "icon-airudiantubiaohuizhi-zhuanqu_youxi",
                    },
                    {
                        key: 102300005,
                        name: "编程",
                        title: "code",
                        icon: "icon-biancheng-01",
                    },
                    {
                        key: 102300006,
                        name: "动漫",
                        title: "anime",
                        icon: "icon-aidongman",
                    },
                ]
            }
        }
    },
    {
        url: '/api/getNavInfo2',
        methed: 'get',
        response: () => {
            return {
                code: 200,
                mes: 'ok',
                data: [
                    {
                        key: 102300001,
                        name: "推荐",
                        title: "recommend",
                        icon: "icon-tuijian",
                    },
                    {
                        key: 102300002,
                        name: "热门",
                        title: "hot",
                        icon: "icon-sousuoremenfenlei",
                    },
                    {
                        key: 102300003,
                        name: "食品",
                        title: "food",
                        icon: "icon-shouyeshipin",
                    },
                    {
                        key: 102300004,
                        name: "游戏",
                        title: "game",
                        icon: "icon-airudiantubiaohuizhi-zhuanqu_youxi",
                    },
                    {
                        key: 102300005,
                        name: "编程",
                        title: "code",
                        icon: "icon-biancheng-01",
                    },
                    {
                        key: 102300006,
                        name: "动漫",
                        title: "anime",
                        icon: "icon-aidongman",
                    },
                    {
                        key: 102300007,
                        name: "音乐",
                        title: "music",
                        icon: "icon-yinle",
                    },
                    {
                        key: 102300008,
                        name: "电影",
                        title: "movie",
                        icon: "icon-dianying",
                    },
                    {
                        key: 102300009,
                        name: "电视剧",
                        title: "tv",
                        icon: "icon-dianshiju",
                    },
                    {
                        key: 102300010,
                        name: "科技",
                        title: "tech",
                        icon: "icon-heikeji",
                    },
                    {
                        key: 102300011,
                        name: "生活",
                        title: "life",
                        icon: "icon-icon",
                    },
                    {
                        key: 102300012,
                        name: "娱乐",
                        title: "entertainment",
                        icon: "icon-yule",
                    },
                    {
                        key: 102300013,
                        name: "体育",
                        title: "sport",
                        icon: "icon-airudiantubiaohuizhi-zhuanqu_tiyushijie",
                    },
                    {
                        key: 102300014,
                        name: "财经",
                        title: "finance",
                        icon: "icon-caijingdaodu",
                    },
                ]
            }
        }
    }
] as MockMethod[];