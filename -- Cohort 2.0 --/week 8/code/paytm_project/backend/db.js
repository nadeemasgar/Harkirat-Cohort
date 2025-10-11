const mongoose = require("mongoose");

// const mongo_URL =
//   "mongodb+srv://admin:Nadeem%40123@cluster0.xpmnqir.mongodb.net/";

const mongo_URL = "mongodb://localhost:27017/paytm";

const connect = async () => {
  try {
    await mongoose.connect(mongo_URL);
  } catch (err) {
    console.log(err);
  }
};

connect()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
