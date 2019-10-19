/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    static: {
      prefix: '/static',
      dir: path.join(appInfo.baseDir, 'app/public'),
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1571160929426_4425';

  // add your middleware config here
  config.middleware = [ 'errHandler' ];
  // 数据库配置
  config.sequelize = {
    dialect: 'mysql',
    host: '111.230.147.75',
    username: 'root',
    password: 'XiaoCY135!',
    port: 3306,
    database: 'tumu-project',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
