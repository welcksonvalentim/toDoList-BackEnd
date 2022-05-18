const List = (sequelize, DataTypes) => {
  const list = sequelize.define(
    'List',
    {
      description: DataTypes.STRING,
      status: DataTypes.STRING,
      date: DataTypes.DATE,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'List',
    },
  );
  return list;
};

module.exports = List;