"use strict";
const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var Scene = sequelize.define(
    "Scene",
    {
      name: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      metadata: {
        type: Sequelize.STRING
      },
      projectId: {
        type: Sequelize.INTEGER
      }
    },
    {
      freezeTableName: true,
      tableName: "scene",
      classMethods: {
        associate: function(models) {
          Scene.belongsTo(models.Project);
        }
      }
    }
  );
  return Scene;
};
