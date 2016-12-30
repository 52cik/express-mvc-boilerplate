'use strict';


// node环境
const NODE_ENV = process.env.NODE_ENV || 'development';

// 各种地址配置
const host = {
  test: { // 测试环境
    assets: 'http://localhost:9091', // 静态资源图片域
    logs: 'http://localhost:8110', // 日志系统
  },

  development: { // 开发环境
    assets: 'http://localhost:9091', // 静态资源图片域
    logs: 'http://localhost:8110', // 日志系统
  },

  production: { // 生产环境
    assets: 'http://img.xxx.com/images', // 静态资源图片域
    logs: 'http://logs.xxx.com', // 日志系统
  },
};


// 数据库配置
const db = {
  test: 'mongodb://127.0.0.1:27017/mydb-test', // 测试环境
  development: 'mongodb://127.0.0.1:27017/mydb', // 开发环境
  production: 'mongodb://127.0.0.1:27017/mydb',  // 生产环境
};


// 全局配置
const settings = {
  host: host,
  db: db,

  isDebug: NODE_ENV === 'development', // 是否是调试模式
};


module.exports = settings;
