import classes from "./styles.module.css";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

const MainButton = () => {
  const docDefinition = {
    content: [
      "First paragraph",
      "Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines",
    ],
  };

  const onClick = () => {
    pdfMake
      .createPdf(docDefinition, undefined, undefined, pdfFonts.pdfMake.vfs)
      .download();
  };

  return (
    <button className={classes.wrapper} onClick={onClick}>
      Génerer le rapport
    </button>
  );
};

export default MainButton;
