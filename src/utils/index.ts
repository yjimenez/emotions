export const formatDate: (input: Date | string) => string | null = (input) => {
  if (!input) {
    return null;
  }
  const date = new Date(input);
  const year = date.getFullYear();
  return `${year}`;
};

export default {
  formatDate,
};
