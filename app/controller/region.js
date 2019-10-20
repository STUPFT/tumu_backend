'use strict';

const Controller = require('egg').Controller;

class DetailController extends Controller {
  /**
   * 某地区的详细信息
   */
  async detail() {
    const { ctx } = this;
    const id = ctx.params.id;
    ctx.body = {
      data: await ctx.service.regionDetails.detail(id),
    };
  }
  async getDetails() {
    const { ctx } = this;
    ctx.validate({ id: 'string' }, ctx.request.query);
    const { id } = ctx.request.query;
    ctx.body = {
      data: await ctx.service.regionDetails.getDetail(id),
    };
  }
}

module.exports = DetailController;
