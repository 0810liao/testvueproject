import { request } from "./request";

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}


//获取推荐商品
export function getHomeGoods(page,type){
    return request({
        url: '/home/data',
        params:{
            page,
            type
        }
    })
}