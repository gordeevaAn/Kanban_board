import React from "react";
import css from "./header.module.css";
import { Profile } from "./profile/profile";

export const Header = () => {
  return (
    <header className={css.header}>
      <h1 className={css.h1}>Awesome Kanban Board</h1>
      <Profile />
    </header>
  );
};
