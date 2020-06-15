module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'provider', {
      type: Sequelize.BOOLEAN,
      onUpdate: 'CASCADE',
      allowNull: false,
      defaultValue: false,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'provider');
  },
};
