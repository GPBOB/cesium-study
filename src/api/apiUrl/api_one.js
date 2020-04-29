//示例，根据项目修改或重新创建
import https from "../https";
import config from "@/config";

export default {
  login(params) {
    return https.post(`${config.baseUrl}/login`, params);
  }
};
