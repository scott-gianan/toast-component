//react
import { useState, useId, createContext, useEffect } from "react";
//constants
export const ToastContext = createContext();

function ToastProvider({ children }) {
  //hooks
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");
  const [toasts, setToasts] = useState([]);
  const toastId = useId();
  //functions
  const handleMessage = (event) => {
    setMessage((prevMessage) => event.target.value);
  };
  const handlePopToast = () => {
    if (!message && !variant) return;
    if (!message && variant) return;
    setMessage("");
    setVariant((prevVariant) => {
      if (!prevVariant) return "notice";
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
  //context
  const toastContext = {
    message,
    variant,
    setVariant,
    toasts,
    setToasts,
    handleMessage,
    handlePopToast,
  };
  useEffect(() => {
    const handleDismissToast = (event) => {
      const pressedKey = event.key;
      if (pressedKey === `Escape`) {
        setToasts([]);
      }
    };
    window.addEventListener("keydown", handleDismissToast);
    return () => {
      window.removeEventListener("keydown", handleDismissToast);
    };
  }, []);
  return (
    <ToastContext.Provider value={toastContext}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
