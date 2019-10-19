'use strict';

const Controller = require('egg').Controller;

class SearchController extends Controller {
  async search() {
    const { ctx } = this;
    // mode模式：破坏类型damage_type 地区信息region_info
    ctx.validate({
      mode: 'string',
      key: 'string',
    }, ctx.request.query);
    const { mode, key } = ctx.request.query;
    let data;
    if (mode === 'region_info') {
      data = await ctx.service.search.searchByRegionInfo(key);
    }
    if (mode === 'damage_type') {
      data = await ctx.service.search.searchByDamageType(key);
    }
    ctx.body = {
      data: data || [],
    };
  }
}

module.exports = SearchController;
