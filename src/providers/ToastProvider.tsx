import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    children: React.ReactNode;
};

const ToastProvider = ({ children }: Props) => {
  return (
    <>
      {children}
      <ToastContainer
        theme="colored"
        hideProgressBar
        newestOnTop
      />
    </>
  );
};

export default ToastProvider;
