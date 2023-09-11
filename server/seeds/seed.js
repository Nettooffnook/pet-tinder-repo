const db = require('../config/connection');
const { Pet } = require('../models');

const petData = require('./petData.json');

const pictureData = {
  firstPet: 'Image1',
  image: ''
}

db.once('open', async () => {
  await Pet.deleteMany({});

  const technologies = await Pet.insertMany(techData);

  console.log('Puppies seeded!');
  process.exit(0);
});
