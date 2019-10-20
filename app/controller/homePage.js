'use strict';

const Controller = require('egg').Controller;

class HomePageController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async getDamageTypeList() {
    const { ctx } = this;
    ctx.body = {
      damageType: await ctx.service.homePage.getDamageTypeList(),
    };
  }

  async getRegionList() {
    const { ctx } = this;
    const options = {
      repair_rating: 'string',
      type_id: 'string',
      start: 'string',
      num: 'string',
    };
    ctx.validate(options, ctx.request.query);
    const { repair_rating, type_id, start, num } = ctx.request.query;
    // 用户可以选择多个评级和破坏类型，暂时规定不同评级和破坏类型之间用逗号隔开。
    // 下面是用逗号分割repair_rating,type_id
    const repair_rating_arr = repair_rating.split(',');
    const type_id_arr = type_id.split(',');
    // 转换start和num为数字，防止后面报错
    ctx.body = {
      region: await ctx.service.homePage.getRegionList(repair_rating_arr, type_id_arr, parseInt(start), parseInt(num)),
    };
  }
}

module.exports = HomePageController;
