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
}

module.exports = HomePageService;
