import React from "react";
import { IconProfile } from "../../assets/icons/icon-profile";
import { IconChevron } from "../../assets/icons/icon-chevron";
import css from "./profile.module.css";
import { useState } from "react";

export const Profile = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div className={css.profile} onClick={() => setIsMenuShown(!isMenuShown)}>
      <IconProfile />
      <div className={`${css.chevron} ${isMenuShown ? css.up : ""}`}>
        <IconChevron />
      </div>
      {isMenuShown && (
        <div className={css.menu}>
          <div className={css.div1}>Profile</div>
          <div className={css.div2}>Log Out</div>
        </div>
      )}
    </div>
  );
};
