const fs = require('fs');
const mongoose = require('mongoose');
const cfg = require('../config');

// 使用原生 Promise
mongoose.Promise = global.Promise;

// 连库
mongoose.connect(cfg.db);

// Mongodb 连接日志
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${cfg.db}.`);
}).on('error', (err) => {
  console.error(err);
}).on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// 关闭连接
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});

// 加载模型
const models = fs.readdirSync(__dirname);
models.forEach((model) => {
  if (/Model\.js$/i.test(model)) { // 以 Model.js 结尾的才加载
    require('./' + model);
  }
});
