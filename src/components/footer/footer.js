import React from "react";
import css from "./footer.module.css";
import { useTasks } from "../../hooks/tasks/useTasks";

export const Footer = () => {
  const { getActiveTaskCount, getFinishedTaskCount } = useTasks();

  return (
    <div className={css.footer}>
      <div>
        <span>Active tasks: &lt; {getActiveTaskCount()} &gt;</span>
        <span>Finished tasks: &lt; {getFinishedTaskCount()} &gt;</span>
      </div>
      <div className={css.copy}>Kanban board by Gordeeva, 2023</div>
    </div>
  );
};
