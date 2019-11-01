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
            model: ctx.model.DamageTypePicture,
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
}

module.exports = RegionDetailService;
