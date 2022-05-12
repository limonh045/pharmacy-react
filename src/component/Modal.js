import Class from "../style/Modal.module.css";
import ReactDOM from "react-dom";

function Modal(props) {
  const { value, title, modalHandelar } = props;

  return ReactDOM.createPortal(
    <div>
      {value && (
        <div className={Class.modalSection}>
          <div className={Class.modalArea}>
            <div className="spaceBetween">
              <h2>{title}</h2>
              <img
                onClick={modalHandelar}
                className={Class.xicon}
                src="icon/xIcon.png"
                alt="x Icon"
              />
            </div>
            <br />
            {props.children}
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}

export default Modal;
