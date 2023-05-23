//import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import css from "./cardTaskList.module.css";
//import {Button} from '../../../assets/button/button'
//import { IconDelete } from '../../../assets/icons/icon-delete';

export const CardTaskList = (props) => {
  const navigate = useNavigate();

  return (
    <div className={css.card} onClick={() => navigate(`/tasks/${props.id}`)}>
      <span>{props.name}</span>
    </div>
  );
};
