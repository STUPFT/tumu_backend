'use strict';

module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;

  const Region = app.model.define('Region', {
    region_id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    region_name: STRING(64),
    first_picture: STRING(512),
    introduction: TEXT,
    repair_rating: INTEGER,
    conclusion: STRING(1024),
  }, {
    tableName: 'region',
    timestamps: false,
  });

  Region.associate = function() {
    Region.hasMany(app.model.RegionIntroductionPicture, {
      as: 'pictures',
      foreignKey: 'region_id',
    });
    Region.hasMany(app.model.RegionDamageType, {
      as: 'damage_type',
      foreignKey: 'region_id',
    });
    Region.hasMany(app.model.DamageTypePicture, {
      as: 'damage_pictures',
      foreignKey: 'region_id',
    });
  };

  return Region;
};
