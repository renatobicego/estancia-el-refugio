import { Bounce, toast } from "react-toastify";

enum Type {
  success,
  error,
  warning,
  info,
}

export const toastify = (type: "success" | "error", message: string) => {
  switch (type) {
    case "success":
      return toast.success(message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

    case "error":
      return toast.error(message, {
        position: "bottom-left",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
  }
};
