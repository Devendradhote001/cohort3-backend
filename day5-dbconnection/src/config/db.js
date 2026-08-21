const { default: mongoose } = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ddhote780_db_user:Fzn3PnROYmP62wzR@cluster0.k8lusa1.mongodb.net/",
    );
    console.log("mongodb connected");
  } catch (error) {
    console.log("error in db", error);
  }
};

module.exports = connectDb;
