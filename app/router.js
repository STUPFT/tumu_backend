'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 获取破坏类型列表
  router.get('/destroy/list', controller.homePage.getDamageTypeList);
  // 获取地区列表
  router.get('/region/list', controller.homePage.getRegionList);
};
