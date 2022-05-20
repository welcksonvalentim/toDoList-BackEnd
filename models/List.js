const List = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true, 
          autoIncrement: true 
      },
      description: DataTypes.STRING,
      status: DataTypes.STRING,
      date: DataTypes.DATE,
      priority: DataTypes.STRING,
  }, { 
      freezeTableName: true,
      timestamps: false
  })
  return List
}

module.exports = List;
