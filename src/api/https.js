import Axios from "axios";
import QS from "qs";

//最长响应时间
Axios.defaults.timeout = 5000;

//axios请求拦截
Axios.interceptors.request.use(
  config => {
    const token = store.state.token;
    // if (!token) {}
    token && (config.headers.Authorization = token);
    return config;
  },
  error => {
    return Promise.error(error);
  }
);

//axios响应拦截
Axios.interceptors.response.use(
  response => {},
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          this.$message.info("未登录用户");
          break;
        case 403:
          this.$message.info("登录状态已过期，请重新登录");
          break;
        case 404:
          this.$message.info("网络请求不存在");
          break;
        default:
          this.$message.info("网络请求出错");
        //   this.$message.info(error.response.data.message);
      }
      return Promise.reject(error.response);
    }
  }
);

const https = {
  /**
   * get方法，对应get请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  get: function(url, params) {
    return new Promise((resolve, reject) => {
      Axios.get(url, {
        params: params
      })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  },
  /**
   * post方法，对应post请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  post: function(url, params) {
    return new Promise((resolve, reject) => {
      Axios.post(url, QS.stringify(params))
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  },
  /**
   * put方法，对应put请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  put: function(url, params) {
    return new Promise((resolve, reject) => {
      Axios.put(url, QS.stringify(params))
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  },
  /**
   * delete方法，对应delete请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  delete: function(url, params) {
    return new Promise((resolve, reject) => {
      Axios.delete(url, QS.stringify(params))
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  }
};
export default https;
