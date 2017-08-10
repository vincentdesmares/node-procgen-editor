"use strict";
const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define(
    "Project",
    {
      name: {
        type: Sequelize.STRING
      }
    },
    {
      freezeTableName: true,
      tableName: "project",
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return Project;
};
