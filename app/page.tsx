"use client";

import { useState } from "react";

import AddTodoModal from "@/components/AddTodoModal";
import TodoDone from "@/components/TodoDone";
import TodoUndone from "@/components/TodoUndone";

const Page = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModalTodo = () => {
    setOpenModal(() => !openModal);
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <button
          onClick={handleOpenModalTodo}
          className="rounded-lg bg-blue-500 hover:bg-blue-700 px-3 py-2 text-lg font-semibold text-white">
          + Add Todo
        </button>
      </div>
      {openModal ? <AddTodoModal setOpenModal={setOpenModal} /> : null}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <TodoUndone />
        </div>
        <div>
          <TodoDone />
        </div>
      </div>
    </div>
  );
};

export default Page;
