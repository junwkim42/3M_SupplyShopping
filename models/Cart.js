module.exports = function(sequelize, DataTypes) {
  var Cart = sequelize.define("Cart", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Cart;
};
