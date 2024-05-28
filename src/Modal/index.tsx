import { useState } from "react";
import { createPortal } from "react-dom";
import Content from "./content";

export default function Modal() {
  const [showModal, setShowModal] = useState(true);

  return (
    showModal &&
    createPortal(<Content onClose={() => setShowModal(false)} />, document.body)
  );
}
