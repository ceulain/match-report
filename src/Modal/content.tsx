type Props = {
  onClose: () => void;
};

export default function Content({ onClose }: Props) {
  return (
    <div>
      <p>Je suis une modal</p>
      <button onClick={onClose}>Fermer</button>
    </div>
  );
}
