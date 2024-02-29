export const opacity = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.75,
    transition: {
      duration: 1,
      delay: 0.3,
    },
  },
};

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: {
      duration: 1.4,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.3,
    },
  },
};
