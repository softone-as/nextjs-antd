import * as Sentry from "@sentry/nextjs";

export const getQueryServer = async <T>(fn: () => Promise<T>) => {
  try {
    const data = await fn();

    Sentry.withScope((scope) => {
      scope.setExtras({ message: "response fetch" });
      Sentry.captureException(data);
    });

    return {
      data: {
        data: [
          { id: 1, name: "John Doe" },
          { id: 2, name: "Jane Doe" },
          { id: 3, name: "John Smith" },
        ],
        pagination: {
          current: 1,
          pageSize: 10,
          total: 1,
        },
      },
    };
  } catch (error) {
    return { error };
  }
};
