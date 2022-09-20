const sequelize = require('../config/connection');
const { Users, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');


const seedDatabase = async () => {
  try {

  
  await sequelize.sync({ force: true });

  const users = await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  } catch (err){
    console.log(err)
  }
  

  process.exit(0);
};

seedDatabase();

