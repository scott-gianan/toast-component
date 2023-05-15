import React from "react";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ shelf }) {
  return (
    <ol className={styles.wrapper}>
      {shelf.map((toast, index) => {
        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast
              message={toast.message}
              variant={toast.variant}
              id={toast.id}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
//<li className={styles.toastWrapper}>{/* toast here */}</li>;
