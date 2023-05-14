import React from "react";
import { useId } from "react";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ shelf }) {
  console.log(shelf);
  return (
    <ol className={styles.wrapper}>
      {shelf.map((toast, index) => {
        return (
          <li className={styles.toastWrapper} key={index}>
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
