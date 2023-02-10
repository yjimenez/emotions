export const delay = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};
