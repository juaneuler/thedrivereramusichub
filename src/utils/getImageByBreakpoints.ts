export const getImageByBreakpoints = (
  width: number,
  breakpoints: { width: number; image: string }[]
) => {
  return (
    breakpoints.find((bp) => width >= bp.width)?.image ||
    breakpoints[breakpoints.length - 1].image
  );
};