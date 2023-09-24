import cloudinary from "../utils/cloudinary";
import { Request } from "express";
import { Readable } from "stream";

export default async function uploadFile(req: Request) {
  const file = req.file;
  if (!file) {
    throw new Error("No file uploaded.");
  }

  return new Promise((resolve, reject) => {
    const writeStream = cloudinary.uploader.upload_stream(
      { folder: "shop-api" },
      (error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );

    const readStream = new Readable({
      read() {
        this.push(file.buffer);
        this.push(null);
      },
    });

    readStream.pipe(writeStream);
  });
}
