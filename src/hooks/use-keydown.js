import { useEffect } from "react";

export default function useKeyDown(key, callbackFunction) {
  if (typeof callbackFunction !== "function") {
    throw Error(
      `Second argument must be a callback function. useKeyDown(string, function)`
    );
  }
  useEffect(() => {
    const handleDismissToast = (event) => {
      const pressedKey = event.code;
      if (pressedKey === key) {
        callbackFunction(event);
      }
    };
    window.addEventListener("keydown", handleDismissToast);
    return () => {
      window.removeEventListener("keydown", handleDismissToast);
    };
  }, [key, callbackFunction]);
}
