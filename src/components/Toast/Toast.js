import React from "react";
import { useContext, useRef } from "react";
//dependencies
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";
//component
import VisuallyHidden from "../VisuallyHidden";
import { ToastContext } from "../ToastPlayground/ToastPlayground";
//styles
import styles from "./Toast.module.css";
//constants
const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ message, variant, id }) {
  const { setToasts } = useContext(ToastContext);
  const ref = useRef();
  const handleCloseToast = () => {
    setToasts((prevToasts) => {
      return prevToasts.filter((toast) => {
        return toast.id !== id;
      });
    });
  };

  return (
    <div className={`${styles.toast} ${styles[variant]}`} ref={ref} id={id}>
      <div className={styles.iconContainer}>
        <Info size={24} />
      </div>
      <p className={styles.content}>{message}</p>
      <button className={styles.closeButton} onClick={handleCloseToast}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
