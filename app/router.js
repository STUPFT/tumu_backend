'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  router.get('/', controller.home.index);

  // 获取破坏类型列表
  router.get('/destroy/list', controller.homePage.getDamageTypeList);
  // 获取地区列表
  router.get('/region/list', middleware.picturePrefix(), controller.homePage.getRegionList);
  /**
   * 获取详情
   * id : 地区 id
   */
  router.get('/details/:id', middleware.picturePrefix(), controller.region.detail);
  /**
   * 搜索
   * key 关键词
   * mode 模式 可选 damage_type / region_info
   * start 分页用 起始 默认为0
   * num 分页用 数量 默认为10
   */
  router.get('/search', controller.search.search);

  /**
   * 暂时的上传文件（图片）接口，可以同时多个文件
   */
  router.post('/pictures', controller.home.uploadPictures);
};
