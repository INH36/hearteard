// 用户相关类型
export interface userType{
    userData: userDataType | null,
    isLogin: Boolean
}

export interface userDataType{
    id: number, //用户id
    username: string, //用户名
    password: string, //密码
    background: string | null, //背景
    email: string | null, //邮箱
    phone: string | null, //手机
    status: string, //状态
    lastLoginTime: string | null, //上次登录时间
    avatar: string, //头像
    like: number, //关注数
    follow: number, //粉丝数
    blog: number | null, //博客数
}