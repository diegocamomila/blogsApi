'use strict';

// JSdocks para dar a sugestoes
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} dataTypes 
 * @returns 
 */

const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  // user 1 - n blogpost
  // assocoaçao definir em duplas 
  // Para criar um relacionamento Um-para-Muitos , as associações 
  // hasMany e belongs To são usadas junta
  User.associate = (models)=> {
    User.hasMany(models.BlogPost, 
      {
        foreignKey: 'userId', 
        as:'posts'
      }
    );
  };

  return User;
};

module.exports = User;