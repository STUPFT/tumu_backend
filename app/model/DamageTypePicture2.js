'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const DamageTypePicture2 = app.model.define('DamageTypePicture', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rd_id: INTEGER,
    picture_path: STRING(128),
  }, {
    tableName: 'damage_type_picture2',
    timestamps: false,
  });

  return DamageTypePicture2;
};
