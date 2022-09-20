import dotenv from "dotenv";
dotenv.config();

export const config = {
  DEV: {
    name: process.env.CLOUDINARY_DEV_PROJECT_NAME,
    url: process.env.CLOUDINARY_URL_DEV,
    key: process.env.CLOUDINARY_KEY_DEV,
    secret: process.env.CLOUDINARY_SECRET_DEV,
  },
  PROD: {
    name: process.env.CLOUDINARY_PROD_PROJECT_NAME,
    url: process.env.CLOUDINARY_SECRET_PROD,
    key: process.env.CLOUDINARY_KEY_PROD,
    secret: process.env.CLOUDINARY_SECRET_PROD,
  },
};
