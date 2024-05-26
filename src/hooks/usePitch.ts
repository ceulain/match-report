import { useEffect } from "react";
import { drawPlayer } from "../utils/canvas";

const usePitch = (canvas: React.RefObject<HTMLCanvasElement>) => {
  useEffect(() => {
    if (canvas.current) {
      const ctx = canvas.current.getContext("2d");

      if (!ctx) return;

      ctx.strokeStyle = "white";
      ctx.strokeRect(25, 25, 250, 450);

      ctx.beginPath();
      ctx.moveTo(25, 250);
      ctx.lineTo(275, 250);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(150, 250, 40, 0, 2 * Math.PI);
      ctx.stroke();

      ctx.rect(135, 15, 30, 10);
      ctx.stroke();

      ctx.rect(135, 475, 30, 10);
      ctx.stroke();

      drawPlayer(ctx, 150, 40);
    }
  });
};

export default usePitch;
