import axios, {
  AxiosRequestConfig
} from 'axios';
import constConfig from '../../constConfig'
const cancelTokenSource = axios.CancelToken.source();

/***************************** S:工具函数 ****************************************** */

/**
 * 获取本地token , 不确定是否要用,暂时将方法写出
 * @param config 
 */
function handleRequestToken(config) {
  const {
    url = ''
  } = config;
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Token'] = token;
  }
}
/**
 * 转码,可以防止XSS攻击
 * @param params 
 */
const encodeSpecial = (params) => {
  let regex = /\[|\]|【|】/g;
  for (const key in params) {
    if (regex.test(params[key])) {
      params[key] = params[key].replaceAll('[', '');
      params[key] = params[key].replaceAll(']', '');
    }
  }
  return params;
};


/************************** S:Axios实例  ************************************** */
// 创建axios实例
const Http = axios.create({
  timeout: 1000 * 60 * 3,
  withCredentials: false, //不带cookie,同时也是防止跨域问题出现
  baseURL: `${constConfig.API_HOST}`,
  cancelToken: cancelTokenSource.token,
});
Http.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    config.data = JSON.stringify(config.data);
    //fix:框架并未对[]进行转义,需要手动转义get中的此特殊符号,防止XSS攻击
    if (config.params) config.params = encodeSpecial(config.params);
    //打印请求
    console.warn('--- Http 请求 开始 ---');
    console.log(`请求方法:${config.method} ; 请求URL: ${config.url} ; 整个config查看: ${config}`);
    console.log(`请求参数: `, config.data || config.params);
    console.warn('--- Http 请求 结束---');
    // 此处是加Token,不确定是否要加,暂存
    // handleRequestToken(config);
    return config;
  },
  (error) => {
    console.error(error);
  }
);

Http.interceptors.response.use(
  (response) => {
    const data = response.data;
    // 打印结果
    console.error('--- Http 响应 开始 ---');
    console.log(response.config);
    console.log(response.config.url);
    console.log(response.data);
    console.error('--- Http 响应 结束 ---');
    if (data?.code === 303) {
      // token无效或过期
      localStorage.remove('token');
      //跳转到登录页面
      window.location.href = `${constConfig.API_HOST}/#/login`
    }
    return data;
  },
  (error) => {
    console.info('网络异常');
    return Promise.reject(error);
  }
);

export default Http;