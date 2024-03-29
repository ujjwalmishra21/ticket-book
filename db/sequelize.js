const Sequelize = require('sequelize');

var sequelize = new Sequelize (process.env.DATABASE_NAME,process.env.MYSQL_USERNAME,process.env.MYSQL_PASSWORD, {
    host:process.env.MYSQL_HOST,
    dialect:'mysql',
    timezone:'+05:30',
    define:{
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }   
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  module.exports = {
    Sequelize,
    sequelize
  };