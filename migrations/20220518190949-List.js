module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('List', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      date: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      priority: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('List');
  },
};
