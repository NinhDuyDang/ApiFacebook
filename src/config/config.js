module.exports = {
  development: {
    username: 'postgres',
    password: '1',
    database: 'NinhDang',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: { 
    username: 'postgres',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
