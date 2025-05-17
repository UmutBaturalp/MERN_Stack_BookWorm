import mongoose from "mongoose";

const bookScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    caption: {
      type: String,
      required: [true, "Please add a caption"],
    },
    image: {
      type: String,
      required: [true, "Please add a image"],
    },
    rating: {
      type: Number,
      required: [true, "Please add a rating"],
      min: 1,
      max: 5,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookScheme);

export default Book;
