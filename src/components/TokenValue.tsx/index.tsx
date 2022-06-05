import "./index.css";
import CloseIcon from "../../assets/close.svg";

export default function TokenValue({
  content,
  close,
  position,
}: {
  content: string;
  close: () => void;
  position: { x: number; y: number };
}) {
  return (
    <div id="modal">
      <div id="modalContent" style={{ top: position.y, left: position.x }}>
        <p> {content}</p>
        {/* <button onClick={() => close()}>close</button> */}
        <img
          className="close-btn"
          src={CloseIcon}
          alt="close"
          onClick={() => close()}
        />
      </div>
    </div>
  );
}
