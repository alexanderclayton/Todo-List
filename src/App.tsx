import React, { FC, ChangeEvent, useState } from 'react';
import { ITask } from './Interfaces';
import TodoTask from './components/TodoTask';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask])
    setTask("")
    setDeadline(0)
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete
    }))
  }

  return (
    <div className="mx-auto max-w-lg">
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row">
          <div className="flex justify-center md:flex-row flex-col">
            <input
              className="flex-grow border border-blue-600 rounded-md my-1 m-2 md:my-2 md:m-2 p-2 text-blue-900"
              type="text"
              placeholder="Task..."
              name="task"
              value={task}
              onChange={handleChange}
            />
            <input
              className="flex-grow border border-blue-600 rounded-md my-1 m-2 md:my-2 md:m-2 p-2 text-blue-900"
              type="number"
              placeholder="Deadline (days)..."
              name="deadline"
              value={deadline}
              onChange={handleChange}
            />
          </div>

        </div>
        <div className="flex justify-center">
          <button
            className="rounded-full bg-red-600 text-white font-bold w-36 h-9"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
      </div>
      <div>
        <div className="text-blue-900 font-bold m-2">
          Tasks:
        </div>
        <div>
          {todoList.map((task: ITask, key: number) => {
            return <TodoTask key={key} task={task} completeTask={completeTask} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

