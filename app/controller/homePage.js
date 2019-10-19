'use strict';

const Controller = require('egg').Controller;

class HomePageController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async getDamageTypeList() {
    const { ctx } = this;
    const damageType = await ctx.service.homePage.getDamageTypeList();
    ctx.body = {
      damageType,
    };
  }
  async getRegionList() {
    const { ctx } = this;
  }
}

module.exports = HomePageController;
