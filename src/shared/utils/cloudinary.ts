import cloudinary from "cloudinary";
import config from "../../config";

cloudinary.v2.config({
  cloud_name: config.cloudinaryCloudName,
  api_key: config.cloudinaryApiKey,
  api_secret: config.cloudinarySecret,
});

export default cloudinary.v2;
