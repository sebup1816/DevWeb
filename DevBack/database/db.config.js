/**
 * Database Configuration Object
 */
const dbconfig = {
    HOST: "127.0.0.2",
    USER: "root",
    PASSWORD: "MichelleMRO*2",
    DB: "devWeb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
module.exports = dbconfig;