
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.sequelize.query(
      `ALTER TABLE "Responses" ALTER COLUMN "tag_uid" SET NOT NULL`
    )
    await queryInterface.sequelize.query(
      `ALTER TABLE "Tags" ALTER COLUMN "user_uid" SET NOT NULL`
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.sequelize.query(
      `ALTER TABLE "Responses" ALTER COLUMN "tag_uid" DROP NOT NULL`
    )
    await queryInterface.sequelize.query(
      `ALTER TABLE "Tags" ALTER COLUMN "user_uid" DROP NOT NULL`
    )
  }
};
