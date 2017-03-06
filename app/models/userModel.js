const mongoose = require('mongoose');
const crypto = require('crypto');

// 用户信息描述
const schema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  date: Date,
});

// 添加用户
schema.statics.addUser = function (user) {
  return this.create({ username: user.username, password: md5(user.password) });
};

// 登录
schema.statics.login = function (user) {
  return new Promise((resolve, reject) => {
    this
      .findOne({ username: user.username, password: md5(user.password) })
      .then((doc) => {
        if (doc) {
          resolve(doc); // 登录成功
        } else {
          reject(doc); // 登录失败
        }
      })
      .catch(reject);
  });
};

// 创建索引
schema.index({ username: 1, password: 1 });

// 注册为模型
const Model = mongoose.model('User', schema);
Model.md5 = md5;

// 导出模型
module.exports = Model;

/**
 * MD5加密
 *
 * @param {string} str 待加密字符串
 * @returns {string} 已加密字符串
 */
function md5(str) {
  return crypto
    .createHash('md5')
    .update(str)
    .digest('hex');
}
