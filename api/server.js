const express = require('express');
const userRouter = require('./users/users-router');
const server = express();

server.use(express.json());

server.use('/api/users', userRouter);

// remember express by default cannot parse JSON in request bodies

// global middlewares and the user's router need to be connected here

server.get('/', async (req, res) => {
  try {
    const shoutouts = await db('shoutouts');
    const messageOfTheDay = process.env.MOTD || 'Hello World!'; // add this line
    res.status(200).json({ motd: messageOfTheDay, shoutouts }); // change this line
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
  }
});



module.exports = server;
