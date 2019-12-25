import {request} from "./request";
// 只有用default导出才能不用大括号
export function getHomeMultidata(){
 return request({
     url:'/home/multidata'
 })
}
//函数调用-》压入函数栈（保存函数调用过程中所有变量）
export function getHomeGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
   }