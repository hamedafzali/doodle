import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import Chat from "./components/Chat";
import "react-toastify/dist/ReactToastify.css";
import Message from "./components/common/Messaage";
function App() {
  return (
    <Fragment>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 99999 }}
      />
      <Chat />
      {/* <Message
        key={123}
        data={{
          _id: "61d86f1748c220001b5f6cee",
          message: "Hello world",
          author: "Tom",
          timestamp: 1641574167016,
          token: "BMVQckhGtdMt",
        }}
        user={{ name: "Tom" }}
      /> */}
    </Fragment>
  );
}

export default App;
