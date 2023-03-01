import { useState } from "react";
import { Presentation } from "./presentation";
import { Socials } from "./socials";
import { Notification } from "../../notification";

export const Main = () => {
  const [notification, setNotification] = useState({
    active: false,
    txt: "",
  });

  return (
    <>
      <Socials props={{ setNotification }} />
      <Presentation />
      <Notification props={{ active: notification.active, txt: notification.txt, setNotification }} />
    </>
  );
};
