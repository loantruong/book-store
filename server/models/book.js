module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('book', {
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 80]
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 40]
      }
    },
    resume: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [2, 4096]
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    }
  });

  User.associate = function associate(models) {};

  return User;
};