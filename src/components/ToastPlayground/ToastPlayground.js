//reacc
import { useContext } from "react";
//components
import Button from "../Button";
import ToastShelf from "../ToastShelf/ToastShelf";
//context
import { ToastContext } from "../ToastProvider/ToastProvider";
//styles
import styles from "./ToastPlayground.module.css";
// constants
const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const {
    message,
    handleMessage,
    variant,
    setVariant,
    handlePopToast,
    toasts,
  } = useContext(ToastContext);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf shelf={toasts} />
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
            <form>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={handleMessage}
              />
            </form>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <RadioButton variant={variant} setVariant={setVariant} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={handlePopToast}>Pop Toast!</Button>
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
