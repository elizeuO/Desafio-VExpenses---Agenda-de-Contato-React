import './toast.scss';

function Toast({ message, status }) {
  const classValues = "c-toast " + status;

  return <div className={classValues}>{message}</div>;
}

export default Toast;
