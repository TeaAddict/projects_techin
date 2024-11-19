const Modal = ({ isOpen }) => {
  const style = isOpen ? "modal--display" : "modal--hidden";

  return <>{isOpen && <p className={style + " modal"}>Modal</p>}</>;
};

export default Modal;
