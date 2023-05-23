
import css from "../button/button.module.css";

export const Button = (props) => {
  return (
    <div className={css.button} onClick={props.onClick}>
      {props.children}
    </div>
  );
};
