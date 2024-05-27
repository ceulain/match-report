/**
 * Draw player in position x y
 * @param ctx canvas context
 * @param xCircle The x-coordinate of the arc's center
 * @param yCircle The y-coordinate of the arc's center
 * @param name Name of player
 */
export const drawPlayer = (
  ctx: CanvasRenderingContext2D,
  xCircle: number = 0,
  yCircle: number = 0,
  name: string = ""
) => {
  ctx.beginPath();
  ctx.arc(xCircle, yCircle, 8, 0, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();

  ctx.textAlign = "center";
  ctx.font = "12px Arial";
  ctx.fillText(name, xCircle, yCircle + 20);
};
