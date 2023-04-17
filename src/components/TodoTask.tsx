import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <div>
            <div>
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <div>
                <button onClick={() => {
                    completeTask(task.taskName);
                }}
                >
                    Finished
                </button>
            </div>
        </div>
    )
}

export default TodoTask