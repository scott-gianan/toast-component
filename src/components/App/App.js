//react
import React from "react";
//components
import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";
//context
import ToastProvider from "../ToastProvider/ToastProvider";

function App() {
  return (
    <>
      <ToastProvider>
        <ToastPlayground />
      </ToastProvider>
      <Footer />
    </>
  );
}

export default App;
