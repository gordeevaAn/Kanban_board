import css from "./cardDetails.module.css";
import { useParams, useNavigate, Link } from "react-router-dom";

import { IconDelete } from "../../assets/icons/icon-delete";
import { useTasks } from "../../../hooks/tasks/useTasks";
import { useEffect, useState } from "react";

export const Card = () => {
  const navigate = useNavigate();
  const { getTaskById, updateTask } = useTasks();
  const { cardId } = useParams();
  const [task, setTask] = useState();

  useEffect(() => {
    if (cardId) {
      setTask(getTaskById(cardId));
    }
  }, [cardId]);

  const navigateBack = () => navigate(-1);

  return (
    <div className={css.card}>
      {task && (
        <div className={css.wrapper}>
          <div className={css.header}>
            <textarea
              className={css.name}
              onChange={(e) =>
                setTask({
                  ...task,
                  name: e.target.value,
                })
              }
              value={task.name || "This task has no name"}
            />
            <textarea
              className={css.description}
              onChange={(e) =>
                setTask({
                  ...task,
                  description: e.target.value,
                })
              }
              value={task.description || "This task has no description"}
            ></textarea>
          </div>

          <div className={css.buttonClose}>
            <Link to="/">
              <IconDelete />{" "}
            </Link>
          </div>

          <div className={css.footer}>
            <button
              className={css.buttonOk}
              onClick={() => {
                updateTask(task);
                navigateBack();
              }}
            >
              &#10003;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
