import React from "react";
import css from "./board.module.css";
import { Column } from "./column/column";
import { useTasks } from "../../hooks/tasks/useTasks";

export const Board = () => {
  const { states } = useTasks();

  return (
    <div className={css.board}>
      {states.map((state) => (
        <Column key={state.id} name={state.name} state={state.state} />
      ))}
    </div>
  );
};
