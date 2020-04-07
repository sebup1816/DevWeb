//IMPORT SEQUELIZE
const Sequelize = require("sequelize");
//IMPORT SEQUELIZE CONNECTION
const sequelizeConnection = require('./db.connection');

//IMPORT MODELS
const UserModel = require("../models/user.model");



//INITIALIZE MODELS
const Graph = graphModel (sequelizeConnection, Sequelize);

//CREATE RELATIONS BETWEEN MODELS

//GROUP MODELS
const models = {
  Graph: Graph
};


/**
 * Create object to manage the models and database
 */
const db = {
    ...models,
    sequelizeConnection
};
  
// EXPORT CONSTANT DB
module.exports = db;