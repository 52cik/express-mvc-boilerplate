module.exports = {
  "env": {
    "browser": true,
    "jquery": true, // 预置 jQuery 环境
  },
  "globals": {
  },
  "rules": {
    "prefer-rest-params": "off", // 要求用 rest 代替 arguments
    "comma-dangle": "off", // 要求末尾逗号
    "no-script-url": "off", // 禁止使用 javascript:
    "newline-per-chained-call": "off", // 要求方法链中每个调用都有一个换行符

    // webpack 别名无法解析
    "import/no-unresolved": "off", // 确保导入可解析的模块
    "import/no-extraneous-dependencies": "off", // 禁止使用无关模块
  },
};
