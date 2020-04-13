module.exports = (sequelize, Sequelize) =>{
    const Edge = sequelize.define ("Edge", 
        {
            idEdge: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true 
            },
            ConnectionTo:{
                type: Sequelize.INTEGER
            },
            error:{
                type: Sequelize.INTEGER
            },
            x:{
                type: Sequelize.INTEGER
            },
            y:{
                type: Sequelize.INTEGER
            },
            z:{
                type: Sequelize.INTEGER
            },
            creation_date: Sequelize.DATE,
            },{
            tableName: "edges"
        }
    );
    return Edge;
}