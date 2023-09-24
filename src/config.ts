import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT!,
  // mysql
  mysqlHost: process.env.MYSQL_HOST!,
  mysqlUser: process.env.MYSQL_USER!,
  mysqlPassword: process.env.MYSQL_PASSWORD!,
  mysqlDatabase: process.env.MYSQL_DATABASE!,
  mysqlPort: process.env.MYSQL_PORT!,
  // cloudinary
  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME!,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY!,
  cloudinarySecret: process.env.CLOUDINARY_SECRET!,
  // jwt
  jwtSecret: process.env.JWT_SECRET!,
  // mail
  mailMailer: process.env.MAIL_MAILER!,
  mailHost: process.env.MAIL_HOST!,
  mailPort: process.env.MAIL_PORT!,
  mailUsername: process.env.MAIL_USERNAME!,
  mailPassword: process.env.MAIL_PASSWORD!,
  mailFrom: process.env.MAIL_FROM_ADDRESS!,
  mailFromName: process.env.MAIL_FROM_NAME!,
  mailEncryption: process.env.MAIL_ENCRYPTION!,
  // website url
  websiteURL: process.env.WEBSITE_URL!,
};
