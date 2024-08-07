import request from "@/utils/request";

// 获取全部在线好友
export const getOnlineFriendList = request.get('/api/getOnlineFriendList').then(res => {
    return res.data
}).catch(err => {
    return err
}).finally(() => {
})