import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type ModalsNames = "wannaParticipate" | "rentStudio";

export type ModalType = {
  [key in ModalsNames]: boolean;
};

type ModalContextData = {
  modals: ModalType;
  toggleModal: (modalName: ModalsNames) => void;
  closeAllModals: () => void;
};

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export const useModal = () => {
  const context = useContext(ModalContext);

  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modals, setModals] = useState<ModalType>({} as ModalType);

  const toggleModal = (modalName: ModalsNames) => {
    document.body.style.overflowY = modals[modalName] ? "scroll" : "hidden";
    setModals(() => {
      return { ...modals, [modalName]: !modals[modalName] };
    });
  };

  const closeAllModals = () => {
    const keys = Object.keys(modals);
    const tempModals = modals;
    keys.forEach((key) => {
      tempModals[key as ModalsNames] = false;
    });

    setModals(() => {
      return { ...tempModals };
    });
    document.body.style.overflowY = "scroll";
  };

  return (
    <ModalContext.Provider value={{ modals, toggleModal, closeAllModals }}>
      {children}
    </ModalContext.Provider>
  );
};
