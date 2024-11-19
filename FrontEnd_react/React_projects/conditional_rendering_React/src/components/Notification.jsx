const Notification = ({ type }) => {
  const style =
    type == "success"
      ? "notification--success"
      : type == "error"
      ? "notification--error"
      : type == "warning"
      ? "notification--warning"
      : "";

  return <>{type && <div className={style + " notification"}></div>}</>;
};

export default Notification;
