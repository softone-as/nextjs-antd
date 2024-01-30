import z from "zod";
import {
  envClientCollectionObj,
  envClientSchemaObj,
} from "./env-client.config";

export const envServerSchemaObj = {
  AUTH_URL: z.string().url(),
  AUTH_URL_INTERNAL: z.string().url().optional(),
  AUTH_SECRET: z.string().trim().min(1),

  AUTH_GOOGLE_ID: z.string().trim().min(1),
  AUTH_GOOGLE_SECRET: z.string().trim().min(1),

  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
};

const envServerCollectionObj = {
  AUTH_URL: process.env.AUTH_URL,
  AUTH_URL_INTERNAL: process.env.AUTH_URL_INTERNAL,
  AUTH_SECRET: process.env.AUTH_SECRET,

  AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
  AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,

  NODE_ENV: process.env.NODE_ENV,
};

export const envServerSchema = z.object(
  Object.assign(envServerSchemaObj, envClientSchemaObj),
);

const envServerCollection = envServerSchema.safeParse(
  Object.assign(envServerCollectionObj, envClientCollectionObj),
);

if (!envServerCollection.success) {
  console.error(envServerCollection.error.issues);
  throw new Error("There is an error with the server environment variables");
}

export const envServer = envServerCollection.data;
