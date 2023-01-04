export const delay = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

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
