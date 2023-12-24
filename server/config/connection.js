const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const dbUri = 'mongodb+srv://nauryz:nauka7292@dbmean.xyqqf2h.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(process.env.MONGODB_URI || dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) throw err;
  console.log('Connected to MongoDB!');
});

module.exports = mongoose.connection;
