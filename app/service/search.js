'use strict';

const Service = require('egg').Service;
const { Client } = require('@elastic/elasticsearch');

// TODO write them to the config file
const esNodeUrl = 'http://111.230.147.75:9200';
const client = new Client({ node: esNodeUrl });
const esIndex = 'tumu';
const esType = 'region';

// TODO 分页
class SearchService extends Service {
  /**
   * 通过地区信息进行搜索
   * Elasticsearch实现
   */
  async searchByRegionInfo(keyword) {
    const res = await client.search({
      index: esIndex,
      type: esType,
      // analyzer: 'ik_smart',
      // from: 0,
      _source: '',
      body: {
        query: {
          multi_match: {
            query: keyword,
            fields: [ 'region_name', 'introduction', 'conclusion' ],
          },
        },
      },
    });
    const hits = res.statusCode === 200 ? res.body.hits.hits : [];
    const result = [];
    // 组装result
    hits.forEach(ele => {
      result.push({
        region_id: ele._id,
        ...ele._source,
      });
    });
    return result;
  }

  /**
   * 通过破坏类型进行搜索
   * mysql模糊查询实现
   */
  async searchByDamageType(keyword, start = 0, num = 10) {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;
    const result = await ctx.model.Region.findAll({
      attributes: [ 'region_id', 'region_name', 'first_picture', 'introduction', 'repair_rating' ],
      // offset: start,
      // limit: num,
      include: [{
        model: ctx.model.RegionDamageType,
        attributes: [ 'type_id' ],
        as: 'damage_type',
        where: {
          type_id: {
            [Op.ne]: null,
          },
        },
        include: [{
          model: ctx.model.DamageType,
          attributes: [ 'type_name' ],
          as: 'type',
          where: {
            type_name: {
              [Op.like]: `%${keyword}%`,
            },
          },
        }],
      }],
    });
    return result;
  }
}

module.exports = SearchService;
