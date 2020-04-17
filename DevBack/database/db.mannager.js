//IMPORT SEQUELIZE
const Sequelize = require("sequelize");
//IMPORT SEQUELIZE CONNECTION
const sequelizeConnection = require('./db.connection');

//IMPORT MODELS

const nodeModel=require("../models/node");
const edgeModel=require("../models/edge");


//INITIALIZE MODELS
const node = nodeModel (sequelizeConnection, Sequelize);
const edge = edgeModel(sequelizeConnection, Sequelize);

//CREATE RELATIONS BETWEEN MODELS
node.hasMany(edge, { foreignKey: 'idEdge', sourceKey: 'idNode' });
edge.belongsTo(node, { foreignKey: 'idPost', sourceKey: 'idEdge' });

//GROUP MODELS
const models = {
  Node: node,
  edge: edge
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