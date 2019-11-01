'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const DamageTypePicture = app.model.define('DamageTypePicture', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rd_id: INTEGER,
    picture_path: STRING(512),
  }, {
    tableName: 'damage_type_picture',
    timestamps: false,
  });

  return DamageTypePicture;
};
