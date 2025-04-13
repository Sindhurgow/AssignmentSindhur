const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: config.DB_PATH,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require('./User')(sequelize, Sequelize);
db.Store = require('./Store')(sequelize, Sequelize);
db.Rating = require('./Rating')(sequelize, Sequelize);

// Associations
db.User.hasMany(db.Rating);
db.Rating.belongsTo(db.User);

db.Store.hasMany(db.Rating);
db.Rating.belongsTo(db.Store);

module.exports = db;
