import { useReducer, useCallback, useState, useEffect } from 'react'
import { AddTaskButton } from './components/add-task-button/AddTaskButton';
import { AddTaskModal } from './components/add-task-modal/AddTaskModal';
import { CheckBoxTask } from './components/check-box-task/CheckBoxTask';
import { tasksReducer, ADD_TASK, UPDATE_TASK } from './tasks-reducer';
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from './utils';
import { Task } from './types';
import styles from './App.module.css';

const initialState = getTasksFromLocalStorage();

function App() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialState
  );
  const [modalVisible, setModalVisible] = useState(false);
  const handleOpen = () => {
    setModalVisible(true);
  }
  const handleCheck = useCallback((task: Task) => {
    dispatch({type: UPDATE_TASK, task});
  }, [dispatch]);
  const handleAdd = useCallback((title: string, description: string) => {
    const lastId = tasks[tasks.length - 1];
    const id = lastId ? lastId.id + 1 : 0;
    const task = {
      id,
      title,
      description,
      checked: false
    }
    dispatch({type: ADD_TASK, task });
  }, [tasks, dispatch])
  const handleClose = useCallback(() => {
    setModalVisible(false)
  }, []);
  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);
  return (
    <div className={styles.root}>
      <section className={styles.list}>
        {tasks.map((task) => {
          const {id} = task;
          return (
            <CheckBoxTask 
              key={id} 
              task={task}
              onCheck={handleCheck}
            />
          );
        })}
      </section>
      <AddTaskButton onClick={handleOpen} />
      {modalVisible && <AddTaskModal onAdd={handleAdd} onClose={handleClose} />}
    </div>
  )
}

export default App
