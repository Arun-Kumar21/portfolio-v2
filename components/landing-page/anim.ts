export const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: (i: number[]) => ({
    y: 0,
    transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
};

export const textUp = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.6 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 1.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1, delay: 0.3 },
  },
};
