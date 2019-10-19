'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const DamageTypePicture = app.model.define('DamageTypePicture', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    region_id: INTEGER,
    type_id: INTEGER,
    picture_path: STRING(128),
  }, {
    tableName: 'damage_type_picture',
    timestamps: false,
  });

  return DamageTypePicture;
};
