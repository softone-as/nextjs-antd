export const getQueryServer = async <T>(fn: () => Promise<T>) => {
  try {
    const data = await fn();

    return { data };
  } catch (error) {
    return { error };
  }
};
