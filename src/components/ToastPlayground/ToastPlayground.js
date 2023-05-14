//reacc
import React from "react";
import { useState } from "react";
//components
import Button from "../Button";
import Toast from "../Toast/Toast";
//styles
import styles from "./ToastPlayground.module.css";
// constants
const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
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
function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");
  const [showToast, setShowToast] = useState(false);
  const handleMessageOnChange = (event) => {
    setMessage((prevMessage) => event.target.value);
  };
  const handleToast = () => {
    setShowToast(!showToast);
    setVariant(() => {
      if (!variant) {
        return "notice";
      }
      return variant;
    });
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {/* start of text input */}
      {showToast && (
        <Toast
          message={message}
          toastVariant={variant}
          isToastShown={showToast}
          setIsToastShown={setShowToast}
        />
      )}
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
            {/* render radio checkbox here */}
            <RadioButton variant={variant} setVariant={setVariant} />
            {/* delete this above */}
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
