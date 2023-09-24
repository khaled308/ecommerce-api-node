import nodemailer, { Transport } from "nodemailer";
import config from "../../config";

const transporter = nodemailer.createTransport({
  host: config.mailHost,
  port: config.mailPort,
  auth: { user: config.mailUsername, pass: config.mailPassword },
} as unknown as Transport);

export default transporter;
