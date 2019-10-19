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
    first_picture: STRING(128),
    introduction: TEXT,
    repair_rating: INTEGER,
    conclusion: STRING(1024),
  }, {
    tableName: 'region',
    timestamps: false,
  });

  return Region;
};
