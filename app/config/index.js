/**
 * 全局配置文件
 */

// 当前环境
const ENV = process.env.NODE_ENV;
const port = process.env.PORT || 3000;

// 导出配置
let cfg = {
  evn: ENV, // 当前环境
  debug: ENV === 'development', // 调试

  port: port, // 绑定端口
  bindingHost: '0.0.0.0', // 所有IP

  jsonLimit: '10MB', // post 数据 json 格式允许10MB

  sessionSecret: 'Session Secret', // session 加密 key
  sessionSecretName: 'auth_token', // session 要加密的 name
};

if (cfg.debug) { // 开发环境加载额外配置
  cfg = Object.assign({}, cfg, require('./index-dev'));
}

// 导出配置
module.exports = cfg;
