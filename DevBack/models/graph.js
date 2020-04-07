module.exports = (sequelize, Sequelize) =>{
    const Graph = sequelize.define ("Graph", 
        {
            idGraph: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true 
            },
            graph:{
                    type: Sequelize.TEXT,
                    get: function () {
                    return JSON.parse(this.getDataValue('value'));
                },
                    set: function (value) {
                    this.setDataValue('value', JSON.stringify(value));
                },
            },
            tableName: "graphs"
        }
    );
    return Graph;
}