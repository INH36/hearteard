import request from "@/utils/request";

// 默认分类
export const getDefaultCategory = request.get('/api/getNavInfo1').then(res => {
    return res.data
}).catch(err => {
    return err
}).finally(() => { })

// 获取全部分类列表
export const getAllCategory = request.get('/api/getNavInfo2').then(res => {
    return res.data
}).catch(err => {
    return err
}).finally(() => { })