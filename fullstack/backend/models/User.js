module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      address: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.ENUM('admin', 'user', 'owner'), defaultValue: 'user' },
    });
  };
  