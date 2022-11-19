import { toast } from "react-toastify";

class ToastMessage {
  success(
    message,
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme
  ) {
    toast.success(message, {
      position: position,
      autoClose: autoClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: closeOnClick,
      pauseOnHover: pauseOnHover,
      draggable: draggable,
      progress: progress,
      theme: theme,
    });
  }
  error(
    message,
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme
  ) {
    toast.error(message, {
      position: position,
      autoClose: autoClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: closeOnClick,
      pauseOnHover: pauseOnHover,
      draggable: draggable,
      progress: progress,
      theme: theme,
    });
  }
  promise(resolved) {
    toast.promise(resolved, {
      pending: {
        render() {
          return "Saving please wait...";
        },
        icon: true,
      },
      success: {
        render({ data }) {
          return `${data}`;
        },
        // other options
        icon: "🟢",
      },
      error: {
        render({ data }) {
          return <>{console.log(data)}</>;
        },
      },
    });
  }
}

export default new ToastMessage();
