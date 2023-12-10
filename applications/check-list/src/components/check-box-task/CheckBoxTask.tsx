import { memo, useCallback } from "react";
import { CheckBox } from "../check-box/CheckBox";
import styles from "./CheckBoxTask.module.css";
import { Task } from "../../types";


type Props = {
  task: Task,
  onCheck: (task: Task) => void
}

export const CheckBoxTask = memo((props: Props) => {
  const {task, onCheck} = props;
  const {title, description, checked} = task;
  const hahdleCheck = useCallback(() => {
    onCheck({
      ...task,
      checked: !task.checked
    });
  }, [task, onCheck]);
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <CheckBox value={checked} onClick={hahdleCheck} />
        <h4>{title}</h4>
      </div>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
});
