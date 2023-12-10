import styles from './AddTaskButton.module.css';

type Props = {
  onClick: () => void
};

export const AddTaskButton = (props: Props) => {
  const {onClick} = props;
  return (
    <button className={styles.root} onClick={onClick}>Добавить задачу</button>
  );
};
