const mongoose = require("mongoose");

const mongo_URL =
  "mongodb+srv://admin:Nadeem%40123@cluster0.xpmnqir.mongodb.net/paytm";

// const mongo_URL = "mongodb://localhost:27017/paytm";
mongoose.connect(mongo_URL);

/*
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
*/

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

const User = mongoose.model("User", userSchema);

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User Model
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const Account = mongoose.model("Account", accountSchema);

module.exports = {
  User,
  Account,
};
