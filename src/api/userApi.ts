import request from "@/utils/request";

// 获取用户信息
export const getUserData = request.get('/api/getUserInfo').then(res => {
    return res.data
}).catch(err => {
    return err
}).finally(() => { })

// 获取推荐的用户信息
export const recommendUserList = request.get('/api/getRecommendUserList').then(res => {
    return res.data
}).catch(err => {
    return err
}).finally(() => { })
