module.exports = function(sequelize, DataTypes) {
  var Cart = sequelize.define("Cart", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Cart;
};
