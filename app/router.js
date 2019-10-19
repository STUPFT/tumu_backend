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

  /**
   * 获取详情
   * id : 地区 id
   */
  router.get('/details/:id', controller.region.detail);
  /**
   * 搜索
   * key 关键词
   * mode 模式 可选 damage_type / region_info
   */
  router.get('/search', controller.search.search);
};
