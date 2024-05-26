/**
 * Draw player in position x y
 * @param ctx canvas context
 * @param xCircle The x-coordinate of the arc's center
 * @param yCircle The y-coordinate of the arc's center
 */
export const drawPlayer = (
  ctx: CanvasRenderingContext2D,
  xCircle: number = 0,
  yCircle: number = 0
) => {
  ctx.beginPath();
  ctx.arc(xCircle, yCircle, 8, 0, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();
};
