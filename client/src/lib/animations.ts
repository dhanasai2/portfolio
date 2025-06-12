export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const floatAnimation = {
  animate: {
    y: [-20, 20, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const skillProgressAnimation = (progress: number) => ({
  initial: { strokeDashoffset: 188.5 },
  animate: { strokeDashoffset: 188.5 - (188.5 * progress / 100) },
  transition: { duration: 2, ease: "easeOut", delay: 0.5 }
});

export const projectCardHover = {
  rest: { 
    scale: 1, 
    y: 0,
    rotateX: 0,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    scale: 1.02, 
    y: -10,
    rotateX: 5,
    boxShadow: "0 20px 40px rgba(0, 212, 170, 0.2)",
    transition: { duration: 0.4, ease: "easeOut" }
  }
};
