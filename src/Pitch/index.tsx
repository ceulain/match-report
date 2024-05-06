import { useEffect, useRef } from "react";

import classes from "./styles.module.css";

const Pitch = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

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
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <canvas
        className={classes.canvas}
        ref={canvas}
        width="300"
        height="500"
        id="pitchCanvas"
      ></canvas>
    </div>
  );
};

export default Pitch;
