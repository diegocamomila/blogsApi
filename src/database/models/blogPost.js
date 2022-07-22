'use strict';

// JSdocks para dar a sugestoes
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} dataTypes 
 * @returns 
 */

 // https://github.com/sequelize/sequelize/issues/645#issuecomment-18461231
 
const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: {type:DataTypes.DATE, defaultValue:Date.now()},
    updated: {type:DataTypes.DATE, defaultValue:Date.now()},
  }, 
  {
    timestamps: false,
  });
  // user 1 - n blogpost
  // assocoaçao definir em duplas 
  // Para criar um relacionamento Um-para-Muitos , as associações 
  // hasMany e belongs To são usadas junta
  BlogPost.associate=(models)=>{
    BlogPost.belongsTo(models.User,
      {
        as: 'user',
        foreignKey: 'userId',        
      }
    );
  };
  return BlogPost;
};

module.exports = BlogPost;
