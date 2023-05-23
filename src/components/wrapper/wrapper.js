import React from "react";
import css from "./wrapper.module.css";
import { TaskProvider } from "../../hooks/tasks/tasksProvider";

export const Wrapper = (props) => {
  return (
    <TaskProvider>
      <div className={css.wrapper}>{props.children}</div>
    </TaskProvider>
  );
};
