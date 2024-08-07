import type { MockMethod } from "vite-plugin-mock";
import Mock from 'mockjs'


export default [
    {   // 获取所有在线好友
        url: 'api/getOnlineFriends',
        method: 'get',
        response: () => {
            const friends = []
            for (let i = 1; i <= 5; i++) {
                friends.push({
                    userid: 1010010 + i,
                    avatar: `/public/userImg/user00${i}.jpg`,
                    name: Mock.Random.cname(),
                })
            }
            return ({
                code: 200,
                mes: 'ok',
                data: friends
            })
        }
    }

] as MockMethod[]