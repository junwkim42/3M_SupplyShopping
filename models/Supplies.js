module.exports = function(sequelize, DataTypes) {
  var Supplies = sequelize.define("Supplies", {
    supply: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagelink: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Supplies;
};

/*
,
    category: {
      type: DataTypes.String,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
*/
