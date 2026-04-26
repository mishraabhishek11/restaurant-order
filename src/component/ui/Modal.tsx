import { PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  open,
  children,
  className,
  onClose,
}: PropsWithChildren & {
  open?: boolean;
  className?: string;
  onClose?: () => void;
}) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialog && dialog.current) {
      if (open) dialog.current.showModal();
      else dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className={`modal ${className}`} ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
};

export default Modal;
