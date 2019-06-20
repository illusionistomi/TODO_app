'use strict';
module.exports = (sequelize, DataTypes) => {
  const todos = sequelize.define('todos', {
    subject: DataTypes.STRING,
    status: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  todos.associate = function(models) {
    // associations can be defined here
  };
  return todos;
};