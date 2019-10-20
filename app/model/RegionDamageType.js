'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const RegionDamageType = app.model.define('RegionDamageType', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    region_id: INTEGER,
    type_id: INTEGER,
    percent: INTEGER,
  }, {
    tableName: 'region_damage_type',
    timestamps: false,
  });

  RegionDamageType.associate = function() {
    RegionDamageType.hasMany(app.model.DamageTypePicture2, {
      as: 'pictures',
      foreignKey: 'rd_id',
    });
  };

  return RegionDamageType;
};
