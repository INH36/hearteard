import type { MockMethod } from "vite-plugin-mock";
import Mock from 'mockjs'

export default [
    {
        url: "/api/getUserInfo",
        method: "get",
        response: () => {
            return {
                code: 200,
                mes:'ok',
                data: {
                    userid: Mock.Random.integer(10100001, 10100010),
                    username: Mock.Random.cname(),
                    avatar: `/public/userImg/user00${Mock.Random.integer(1,9)}.jpg`,
                    password: '123456',
                    background: `/public/background/bg-${Mock.Random.integer(1,4)}.jpg`,
                    phone: '@integer(13000000000, 19999999999)',
                    email: '@email',
                    status: '正常',
                    lastLoginTime: '',
                    like: Mock.Random.integer(0,10), // 关注数
                    follow: Mock.Random.integer(0,10), // 粉丝数
                    blog: Mock.Random.integer(0,10), // 博客数
                },
            }
        },
    },
] as MockMethod[];