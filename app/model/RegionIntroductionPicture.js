'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const RegionIntroductionPicture = app.model.define('RegionIntroductionPicture', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    region_id: INTEGER,
    picture_path: STRING(128),
  }, {
    tableName: 'region_introduction_picture',
    timestamps: false,
  });

  return RegionIntroductionPicture;
};
