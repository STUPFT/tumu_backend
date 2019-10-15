'use strict';

// errCode拼接
// obj格式:
// const obj = {code:'01', a:{code:'02',b:'03'} }
const errCodeJoin = obj => {
  for (const item in obj) {
    if (item !== 'code') {
      obj[item] = new Proxy(obj[item], {
        get(target) {
          return `${obj.code}${target.code}${Reflect.get(...arguments)}`;
        },
      });
    }
  }
};

// const example = {};
// errCodeJoin(example);
// modules.exports = { example };
