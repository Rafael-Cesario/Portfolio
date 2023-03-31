import Image from "next/image";
import { StyledNotification } from "./styles/styledNotification";

interface NotificationProps {
  props: {
    txt: string;
    active: boolean;
    setNotification: (newState: { active: boolean; txt: string }) => void;
  };
}

export const Notification = ({ props: { txt, active, setNotification } }: NotificationProps) => {
  return active ? (
    <StyledNotification>
      <button onClick={() => setNotification({ active: false, txt: "" })} className="close">
        x
      </button>

      <h1 className="title">Texto copiado</h1>
      <p className="txt">{txt}</p>
    </StyledNotification>
  ) : (
    <></>
  );
};
