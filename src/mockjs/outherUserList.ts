import type { MockMethod } from "vite-plugin-mock";
import Mock from 'mockjs'

export default [
    {   // 所有用户9名
        url: '/api/getOutherUserList',
        method: 'get',
        response: () => {
            const userList = []
            for (let i = 1; i < 10; i++) {
                const status = ['正常', '离线'][Mock.Random.integer(0, 1)];
                let lastLoginTime: null | string = '';
                if (status === '离线') lastLoginTime = Mock.Random.date('yyyy-MM-dd');
                userList.push({
                    userid: 1010000 + i,
                    avatar: `/public/userImg/user00${i}.jpg`,
                    name: Mock.Random.cname(),
                    phone: '@integer(13000000000, 19999999999)',
                    email: '@email',
                    status: status,
                    lastLoginTime: lastLoginTime 
                })
            }
            return ({
                code: 200,
                mes: 'ok',
                data: userList
            })
        }
    },
    {   // 推荐用户5名
        url: '/api/getRecommendUserList',
        method: 'get',
        response: () => {
            const userList = []
            for (let i = 0; i <= 5; i++) {
                const status = ['正常', '离线'][Mock.Random.integer(0, 1)];
                let lastLoginTime: null | string = '';
                if (status === '离线') lastLoginTime = Mock.Random.date('yyyy-MM-dd');
                userList.push({
                    userid: 1010000 + i,
                    avatar: `/public/userImg/user00${i}.jpg`,
                    name: Mock.Random.cname(),
                    phone: '@integer(13000000000, 19999999999)',
                    email: '@email',
                    status: status,
                    lastLoginTime: lastLoginTime 
                })
            }
            return ({
                code: 200,
                mes: 'ok',
                data: userList
            })
        }

    }
] as MockMethod[]

