import { ModalsNames, useModal } from "hooks/useModal";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import * as Styles from "./styles";

type ModalProps = {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  modalName: ModalsNames;
};

const Modal = ({ children, className, style, modalName }: ModalProps) => {
  const closeRef = useRef<HTMLDivElement>(null);
  const { toggleModal, modals, closeAllModals } = useModal();

  const closeModal = (evt: any) => {
    if (evt.target === closeRef.current) {
      closeAllModals();
    }
  };

  const keyPress = (evt: KeyboardEvent) => {
    if (evt.key === "Escape") {
      closeAllModals();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {modals[modalName] && (
        <Styles.Wrapper
          className={className}
          style={style}
          onMouseUp={closeModal}
          ref={closeRef}
        >
          {children}
        </Styles.Wrapper>
      )}
    </>
  );
};

export default Modal;
