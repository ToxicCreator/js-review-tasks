import { ADD_TASK, UPDATE_TASK } from "./constants";
import { Task } from "../types";


export * from './constants';

export function tasksReducer(
  tasks: Array<Task>, 
  action: {type: string, task: Task}
) {
  switch (action.type) {
    case ADD_TASK: {
      const {task} = action;
      return [
        ...tasks, 
        task
      ];
    }
    case UPDATE_TASK: {
      return tasks.map((task: Task) => {
        if (task.id === action.task.id)
          return action.task;
        return task;
      });
    }
    default: {
      throw Error(action.type);
    }
  }
}
