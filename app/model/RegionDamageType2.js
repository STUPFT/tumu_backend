'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const RegionDamageType2 = app.model.define('RegionDamageType2', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    region_id: INTEGER,
    type_id: INTEGER,
    percent: INTEGER,
  }, {
    tableName: 'region_damage_type2',
    timestamps: false,
  });

  return RegionDamageType2;
};
