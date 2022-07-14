'use strict';

// JSdocks para dar a sugestoes
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} dataTypes 
 * @returns 
 */

const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
  });

  // https://tableless.com.br/sequelize-a-solu%C3%A7%C3%A3o-para-seus-relacionamentos/
  // Agora temos que ter mais uma tabela de ligação para fazer esse relacionamento, 
  //na prática, um relacionamento de N:N são dois relacionamentos de 1:N em uma tabela de ligação.
  PostCategory.associate = (models)=>{
    models.BlogPost.belongsToMany(models.Category,{
      as: 'categories',
      through: PostCategory,
      foreignKey:'postId',
      otherKey:'categoryId'
    });
    models.Category.belongsToMany(models.BlogPost,{
      as: 'posts',
      through: PostCategory,
      foreignKey:'categoryId',
      otherKey:'postId',
    });
  }

  return PostCategory;
};

module.exports = PostCategory;