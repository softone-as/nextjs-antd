import z from "zod";

export const envClientSchemaObj = {
  NEXT_PUBLIC_SENTRY_DSN: z.string().url(),
  NEXT_PUBLIC_SENTRY_TRACE_SAMPLE_RATE: z.coerce.number().default(1),
};
export const envClientCollectionObj = {
  NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
  NEXT_PUBLIC_SENTRY_TRACE_SAMPLE_RATE:
    process.env.NEXT_PUBLIC_SENTRY_TRACE_SAMPLE_RATE,
};

export const envClientSchema = z.object(envClientSchemaObj);
export const envClient = envClientSchema.parse(envClientCollectionObj);
