import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <div className="flex flex-row m-4">
                <span className="flex items-center border rounded-md w-64 p-3 border-blue-600 text-blue-900 sm:h-32 md:h-9">{task.taskName} </span>
                <span className="flex items-center border rounded-md p-3 border-blue-600 text-blue-900 sm:h-32 md:h-9">Deadline: {task.deadline} days</span>
                <button className="rounded-md bg-red-600 text-white font-bold w-20 sm:h-32 md:h-9"
                    onClick={() => {
                        completeTask(task.taskName);
                    }}
                >
                    Finished
                </button>
        </div>
    )
}

export default TodoTask