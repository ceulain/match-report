import { useRef } from "react";

import classes from "./styles.module.css";
import usePitch from "../hooks/usePitch";

const Pitch = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  usePitch(canvas);

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
