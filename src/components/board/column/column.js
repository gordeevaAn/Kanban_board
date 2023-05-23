import { useState } from "react";
import { useTasks } from "../../../hooks/tasks/useTasks";
import { CardTaskList } from "./card-task-list/cardTaskList";
import Scrollbars from "react-custom-scrollbars-2";
import css from "./column.module.css";

export const Column = (props) => {
  const [isNewTaskInputShow, setIsNewTaskInputShow] = useState(false);
  const [cardName, setCardName] = useState();

  const [isNewTaskSelectShow, setIsNewTaskSelectShow] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(undefined);

  const { getTaskByState, getTaskByExcludedState, addTask, moveTask } =
    useTasks();

  const tasks = getTaskByState(props.state);
  const hasTasks = tasks.length > 0;

  const onInputCard = (e) => {
    setCardName(e.target.value);
  };

  return (
    <div className={css.column}>
      <div className={css.header}>{props.name}</div>
      <div className={css.wrapper}>
        <div className={css.body}>
          {hasTasks && (
            <Scrollbars autoHeightMax={300} autoHide autoHeight>
              {tasks.map((task) => (
                <CardTaskList key={task.id} id={task.id} name={task.name} />
              ))}
            </Scrollbars>
          )}

          {isNewTaskInputShow && (
            <div className={css.form}>
              <input className={css.input} onInput={onInputCard} />
            </div>
          )}

          {isNewTaskSelectShow && (
            <select
              className={css.select}
              onChange={(e) => setSelectedTaskId(e.target.value)}
            >
              <option value={"default"}></option>
              {getTaskByExcludedState(props.state).map((task) => (
                <option key={task.id} value={task.id}>
                  {task.name}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className={css.footer}>
          {!isNewTaskInputShow && !isNewTaskSelectShow && (
            <button
              className={css.addButton}
              onClick={() =>
                props.state === "backlog"
                  ? setIsNewTaskInputShow(true)
                  : setIsNewTaskSelectShow(true)
              }
            >
              + Add card
            </button>
          )}

          {(isNewTaskInputShow || isNewTaskSelectShow) && (
            <button
              type="submit"
              className={css.submit}
              onClick={() => {
                if (props.state === "backlog") {
                  setIsNewTaskInputShow(false);
                  addTask(cardName, "backlog");
                  setCardName(hasTasks);
                } else {
                  setIsNewTaskSelectShow(false);
                  moveTask(selectedTaskId, props.state);
                }
              }}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
