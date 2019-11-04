'use strict';
// https://blog.csdn.net/bocongbo/article/details/83656754
const path = require('path');
const fs = require('fs');
const pump = require('mz-modules/pump');
const uuid = require('node-uuid');

const Service = require('egg').Service;

class PictureService extends Service {
  /**
   * 上传图片到public文件夹下
   */
  async upload(bucket) {
    // 在public下创建bucket目录，否则会报错
    await fs.mkdir(`app/public/${bucket}`, err => {
      // TODO error处理
      console.log(err);
    });
    const { ctx } = this;
    const parts = ctx.multipart({
      autoFields: true,
    });
    let stream;
    // 图片访问地址集合
    const img_list = [];
    while ((stream = await parts()) != null) {
      if (!stream.filename) {
        break;
      }
      // 文件名 使用uuid
      const filename = `${uuid.v1()}${path.extname(stream.filename).toLocaleLowerCase()}`;
      // 上传图片的目录
      const target = `app/public/${bucket}/${filename}`;
      img_list.push(`/${bucket}/${filename}`);
      const writeStream = fs.createWriteStream(target);
      await pump(stream, writeStream);
    }
    // console.log(img_list);
    // console.log(parts.field);
    return img_list;
  }
}

module.exports = PictureService;
