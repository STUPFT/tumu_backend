'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const DamageType = app.model.define('DamageType', {
    type_id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type_name: STRING(64),
  }, {
    tableName: 'damage_type',
    timestamps: false,
  });

  return DamageType;
};
