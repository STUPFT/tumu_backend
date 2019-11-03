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
  config.prefixes = 'http://120.77.174.231:7001/static'
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
    database: 'tumu_project',
  };

  // 跨域配置
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ '*' ],
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // validate相关配置
  exports.validate = {
    // convert: false,
    // validateRoot: false,
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
