require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.get('/', (req, res) => res.send("MongoDB Atlas PoC"));

app.post('/user', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
