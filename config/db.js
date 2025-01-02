require('dotenv').config();
const mongoose = require('mongoose');

async function connectDB() {
  try {
    const connectionString = process.env.MONGODB_CONNECTION_URL;

    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database connected');
  } catch (err) {
    console.error('Database connection failed', err);
    process.exit(1);
  }
}

module.exports = connectDB;
