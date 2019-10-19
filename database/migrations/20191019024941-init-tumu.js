'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, TEXT } = Sequelize;
    await queryInterface.createTable('region', {
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
    });
    await queryInterface.createTable('damage_type', {
      type_id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type_name: STRING(64),
    },
    await queryInterface.createTable('region_introduction_picture', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      region_id: INTEGER,
      picture_path: STRING(128),
    }),
    await queryInterface.createTable('region_damage_type', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      region_id: INTEGER,
      type_id: INTEGER,
      percent: INTEGER,
    }),
    await queryInterface.createTable('damage_type_picture', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      region_id: INTEGER,
      type_id: INTEGER,
      picture_path: STRING(128),
    }),
    await queryInterface.createTable('damage_type_picture2', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      rd_id: INTEGER,
      percent: INTEGER,
    })
    );
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('region');
    await queryInterface.dropTable('damage_type');
    await queryInterface.dropTable('region_introduction_picture');
    await queryInterface.dropTable('region_damage_type');
    await queryInterface.dropTable('damage_type_picture');
    await queryInterface.dropTable('damage_type_picture2');
  },
};
