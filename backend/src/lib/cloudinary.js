import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

console.log(
  "Configuring Cloudinary with cloud name:",
  process.env.CLOUDINARY_CLOUD_NAME
);
// Don't log full API secret for security reasons, just check if it's defined
console.log("Cloudinary API key is defined:", !!process.env.CLOUDINARY_API_KEY);
console.log(
  "Cloudinary API secret is defined:",
  !!process.env.CLOUDINARY_API_SECRET
);
// Check for % characters which might indicate URL-encoded values
console.log(
  "Cloudinary API secret contains % (might be URL-encoded):",
  process.env.CLOUDINARY_API_SECRET?.includes("%")
);

try {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  console.log("Cloudinary configured successfully");
} catch (error) {
  console.error("Error configuring Cloudinary:", error);
}

export default cloudinary;
