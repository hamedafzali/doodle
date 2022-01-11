import { toast } from "react-toastify";
export default function showMessage(msg, type) {
  toast[type](msg, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
