'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  static: {
    enable: true,
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
};
