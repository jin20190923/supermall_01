import axios from 'axios'
export function request(config){
 
    //1.创建axios实例
    const  instance =axios.create({
        baseURL:'http://106.54.54.237:8000/api/v1/',
        timeout:5000
    })
//2.1axios的拦截器的作用，以下三点
instance.interceptors.request.use(config=>{
 
    return config
},err=>{
    // console.log(err)
})


//2.2响应拦截
instance.interceptors.response.use(res=>{
    // console.log(res);
    return res.data

},err=>{
    console.log(err);
})

    //3.发送真正的网络请求
    return instance(config)



   
}


