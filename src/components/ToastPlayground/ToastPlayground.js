//reacc
import React from "react";
import { useState, createContext, useId } from "react";
//components
import Button from "../Button";
import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";
//styles
import styles from "./ToastPlayground.module.css";
// constants
export const ToastContext = createContext();
const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");
  //const [showToast, setShowToast] = useState(true);
  const [toasts, setToasts] = useState([]);
  const toastId = useId();
  const handleMessageOnChange = (event) => {
    setMessage((prevMessage) => event.target.value);
  };
  const handleToast = () => {
    setMessage("");
    setVariant((prevVariant) => {
      if (!prevVariant) {
        return "notice";
      }
      return variant;
    });
    setToasts((prevToasts) => {
      const addedToast = {
        id: `${toastId}-${toasts.length}`,
        message,
        variant: variant || "notice",
      };
      return [...prevToasts, addedToast];
    });
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastContext.Provider value={{ setToasts }}>
        <ToastShelf shelf={toasts} />
      </ToastContext.Provider>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={handleMessageOnChange}
            />
          </div>
        </div>
        {/* end of text input */}
        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <RadioButton variant={variant} setVariant={setVariant} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={handleToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;

function RadioButton({ variant, setVariant }) {
  return VARIANT_OPTIONS.map((option, index) => {
    return (
      <label htmlFor={`variant-${option}`} key={index}>
        <input
          id={`variant-${option}`}
          type="radio"
          name="variant"
          value={option}
          checked={option === variant}
          onChange={(event) => setVariant(event.target.value)}
        />
        {option}
      </label>
    );
  });
}
