'use strict';

module.exports = () => {
  return async function picturePrefix(ctx, next) {
    await next();
    const app = ctx.app;
    const prefixes = app.config.prefixes;
    if (ctx.body.data === undefined) {
      ctx.body.region.forEach(ele => {
        !(ele.first_picture.includes('http')) ? ele.first_picture = prefixes + ele.first_picture : {};
      });
    } else {
      const dataValues = ctx.body.data.dataValues;
      // 对图片进行处理，如果图片地址中有http则证明是完成的图片，如果没有则需要加上前缀。
      // 处理首页图
      !(dataValues.first_picture.includes('http')) ? dataValues.first_picture = prefixes + dataValues.first_picture : {};
      // 处理简介图片集
      dataValues.pictures.forEach(ele => {
        !(ele.picture_path.includes('http')) ? ele.picture_path = prefixes + ele.picture_path : {};
      });
      // 处理破坏类型图片集
      dataValues.damage_type.forEach(ele => {
        ele.pictures.forEach(obj => {
          !(obj.picture_path.includes('http')) ? obj.picture_path = prefixes + obj.picture_path : {};
        });
      });
    }
  };
};
