"use client";

import { FC } from "react";

interface TodoCardProps {
  isDone: boolean;
}

const TodoCard: FC<TodoCardProps> = ({ isDone = false }) => {
  const handleUpdateTodo = () => {
    alert("Update Todo");
  };

  const handleDoneTodo = () => {
    alert("Todo Done");
  };

  const handleUndoneTodo = () => {
    alert("Todo Undone");
  };

  return (
    <div className="p-5 rounded-lg border flex flex-col gap-2 mb-2">
      <div className="flex flex-col">
        <div className="text-lg font-semibold">Judul Todo</div>
        <div className="text-xs">2 hari yang lalu</div>
      </div>
      <p className="rounded-lg bg-slate-100 p-3 text-sm italic">Note</p>
      <div className="flex justify-end space-x-2 mt-2 text-sm">
        <button
          onClick={handleUpdateTodo}
          className="rounded-lg bg-amber-500 hover:bg-amber-700 text-white px-3 p-2">
          Update
        </button>
        {!isDone ? (
          <button
            onClick={handleDoneTodo}
            className="rounded-lg bg-green-500 text-white px-3 p-2 hover:bg-green-700">
            Done
          </button>
        ) : (
          <button
            onClick={handleUndoneTodo}
            className="rounded-lg bg-red-500 text-white px-3 p-2 hover:bg-red-700">
            Undone
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoCard;
