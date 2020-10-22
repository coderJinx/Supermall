import axios from 'axios'

export function request(config, success, failure) {
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })

  //axios的拦截器
  //请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config  //拦截后要返回
  }), err => {

  }
  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }), err => {

  }

  //发送真正的网络请求
  return instance(config)
}
