'use strict';

const Service = require('egg').Service;

class RegionDetailService extends Service {
  async detail(id) {
    const { ctx } = this;
    let res = {};
    try {
      res = await ctx.model.Region.findOne({
        where: {
          region_id: id,
        },
        include: [{
          model: ctx.model.RegionIntroductionPicture,
          attributes: [ 'picture_path' ],
          as: 'pictures',
        }, {
          model: ctx.model.RegionDamageType,
          attributes: { exclude: [ 'id', 'region_id' ] },
          as: 'damage_type',
          include: [{
            model: ctx.model.DamageTypePicture2,
            attributes: [ 'picture_path' ],
            as: 'pictures',
          }],
        }],
      });
    } catch (e) {
      console.log(e);
    }
    return res;
  }
  async getDetail(id) {
    const { ctx } = this;
    let result;
    try {
      result = await ctx.model.Region.findOne({
        attributes: { exclude: [ 'region_id' ] },
        where: {
          region_id: id,
        },
        include: [{
          model: ctx.model.RegionIntroductionPicture,
          attributes: [ 'picture_path' ],
          as: 'pictures',
        }, {
          model: ctx.model.RegionDamageType,
          attributes: [ 'type_id', 'percent' ],
          as: 'damage_type',
        }, {
          model: ctx.model.DamageTypePicture,
          attributes: [ 'type_id', 'picture_path' ],
          as: 'damage_pictures',
        }],
      });
    } catch (err) {
      ctx.logger.warn(err);
      // TODO:错误码
    }
    return result;
  }
}

module.exports = RegionDetailService;
