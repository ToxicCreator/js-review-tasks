import { FormEvent, memo, useState } from "react";
import { createPortal } from "react-dom";
import styles from './AddTaskModal.module.css';


type Props = {
  onAdd: (title: string, description: string) => void,
  onClose: () => void
}

export const AddTaskModal = memo((props: Props) => {
  const {onAdd, onClose} = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAdd(title, description);
    onClose();
  }
  return createPortal(
    <div className={styles.root} onClick={onClose}>
      <form 
        className={styles.form}
        onSubmit={handleSubmit}
        onClick={e => e.stopPropagation()}
      >
        <h2>Добавить задачу</h2>
        <input 
          id="title"
          required
          placeholder="Новая задача" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input 
          id="description"
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>
    </div>,
    document.body
  )
});
