module.exports = {
    HOST: "sql6.freemysqlhosting.net",
    USER: "sql6428080",
    PASSWORD: process.env.DB_PASSWORD || 'di9uMwMrIn',
    DB: "sql6428080",
    PORT: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    authId: 'MAYTK1MDK0Y2VJYJLKZT',
    authToken: 'ZmVkNzMzMGNiMmZjODc4YjdkMDdlZmViZGQxMTQ3',
};