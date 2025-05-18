import express from "express";
import Book from "./../models/Book.js";
import protectRoute from "../middleware/auth.middleware.js";
import cloudinary from "./../lib/cloudinary.js";

const router = express.Router();

router.post("/", protectRoute, async (req, res) => {
  console.log("post request received");
  try {
    const { title, caption, image, rating } = req.body;
    console.log("Book data received:", {
      title,
      caption: caption?.length,
      rating,
    });
    console.log("User ID:", req.user.id);

    if (!title || !caption || !image || !rating) {
      console.log("Missing fields:", {
        title: !title,
        caption: !caption,
        image: !image,
        rating: !rating,
      });
      return res.status(400).json({ message: "All fields are required" });
    }

    console.log("Attempting to upload image to Cloudinary...");
    //upload the image to cloudinary
    try {
      const uploadResponse = await cloudinary.uploader.upload(image);
      console.log(
        "Cloudinary upload successful:",
        uploadResponse.secure_url.substring(0, 50) + "..."
      );
      const imageURL = uploadResponse.secure_url;

      console.log("Creating book in database...");
      //save the book to the database
      const newBook = await Book.create({
        title,
        caption,
        image: imageURL,
        rating,
        user: req.user.id,
      });
      await newBook.save();
      console.log("Book saved successfully with ID:", newBook._id);
      res.status(201).json(newBook);
    } catch (cloudinaryError) {
      console.error("Cloudinary upload error:", cloudinaryError);
      res
        .status(500)
        .json({ message: "Image upload failed: " + cloudinaryError.message });
    }
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/", protectRoute, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const books = await Book.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate("user", "username profileImage");

    const totalBooks = await Book.countDocuments();

    res.status(200).json({
      books,
      currntPage: page,
      totalBooks,
      totalPages: Math.ceil(totalBooks / limit),
    });
  } catch (error) {
    console.log("Error getting books:", error);
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", protectRoute, async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    //check if the user is the owner of the book
    if (book.user.toString() !== req.user.id.toString()) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    //delete image from cloudinary
    if (book.image && book.image.includes("cloudinary")) {
      try {
        const publicId = book.image.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(publicId);
      } catch (deleteError) {
        console.log("Error deleting image from cloudinary:", deleteError);
      }
    }

    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    console.log("Error deleting book:", error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/user", protectRoute, async (req, res) => {
  try {
    const books = await Book.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .populate("user", "username profileImage");

    res.status(200).json(books);
  } catch (error) {
    console.log("Error getting user's books:", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
