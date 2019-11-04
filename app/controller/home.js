'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async uploadPictures() {
    const { ctx } = this;
    ctx.validate({
      bucket: 'string',
    }, ctx.query);
    const { bucket } = ctx.query;
    ctx.body = {
      data: await ctx.service.picture.upload(bucket),
    };
  }
}

module.exports = HomeController;
