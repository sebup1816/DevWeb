module.exports = (sequelize, Sequelize) =>{
    const Node = sequelize.define ("Node", 
        {
            idNode: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true 
            },
            error:{
                type: Sequelize.INTEGER
            },
            ip:{
                type: Sequelize.STRING
            },
            mac:{
                type: Sequelize.STRING
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
            tableName: "nodes"
        }
    );
    return Node;
}