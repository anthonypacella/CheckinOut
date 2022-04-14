const sequelize = require('../config/connection');
const { User, Book } = require('../models');

const userData = require('./userData.json');
const bookData = require('./bookData.json');
const adminData = require('./adminData.json');
const patronData = require('./patronData.json');
const Administrator = require('../models/Administrator.js');
const Patron = require('../models/Patron.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const books = await Book.bulkCreate(bookData);

  const admin = await Administrator.bulkCreate(adminData);

  const patrons = await Patron.bulkCreate(patronData);

  process.exit(0);
};

seedDatabase();
