module.exports = (sequelize, Sequelize) =>{
    const Edge = sequelize.define ("Edge", 
        {
            idEdge: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true 
            },
            ConnectionTo1:{
                type: Sequelize.INTEGER
            },
            ConnectionTo2:{
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
            },{
            tableName: "edges"
        }
    );
    return Edge;
}