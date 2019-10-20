'use strict';
const Service = require('egg').Service;
class HomePageService extends Service {

  async getDamageTypeList() {
    const { ctx } = this;
    let damageType;
    try {
      damageType = await ctx.model.DamageType.findAll();
    } catch (err) {
      ctx.logger.warn(err);
      // throw ctx.helper.createError(`service/student/modifyItems 修改项目信息未知错误 ${err.toString()}`);
    }
    return damageType;
  }
  async getRegionList(repair_rating_arr, type_id_arr, start, num) {
    const { ctx, app } = this;
    const Op = app.Sequelize.Op;
    let result;
    try {
      result = await ctx.model.Region.findAll({
        attributes: [ 'region_id', 'region_name', 'first_picture', 'introduction' ],
        offset: start,
        limit: num,
        where: {
          repair_rating: {
            [Op.in]: repair_rating_arr,
          },
        },
        include: [{
          attributes: [],
          model: ctx.model.RegionDamageType,
          as: 'damage_type',
          where: {
            type_id: {
              [Op.in]: type_id_arr,
            },
          },
        }],
      });
    } catch (err) {
      ctx.logger.warn(err);
      // TODO:错误码
    }
    return result;
  }
}

module.exports = HomePageService;
