'use strict';

const Controller = require('egg').Controller;

class SearchController extends Controller {
  async search() {
    const { ctx } = this;
    // mode模式：破坏类型damage_type 地区信息region_info
    ctx.validate({
      mode: 'string',
      key: 'string',
      start: 'string?',
      num: 'string?',
    }, ctx.request.query);
    const { mode, key, start = '0', num = '10' } = ctx.request.query;
    let data;
    if (mode === 'region_info') {
      data = await ctx.service.search.searchByRegionInfo(key, parseInt(start), parseInt(num));
    }
    if (mode === 'damage_type') {
      data = await ctx.service.search.searchByDamageType(key, parseInt(start), parseInt(num));
    }
    ctx.body = {
      data: data || [],
    };
  }
}

module.exports = SearchController;
