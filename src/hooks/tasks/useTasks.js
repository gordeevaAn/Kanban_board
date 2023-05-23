import { useContext } from "react";
import { TaskContext } from "./tasksContext";

export const useTasks = () => useContext(TaskContext);
