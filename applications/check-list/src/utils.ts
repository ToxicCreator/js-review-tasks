import { LOCALSTORAGE_TASKS_KEY } from "./constants";
import { Task } from "./types";

export const getTasksFromLocalStorage = (): Array<Task> => {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_TASKS_KEY) || '[]');
};

export const saveTasksToLocalStorage = (tasks: Array<Task>) => {
  localStorage.setItem(LOCALSTORAGE_TASKS_KEY, JSON.stringify(tasks));
}
