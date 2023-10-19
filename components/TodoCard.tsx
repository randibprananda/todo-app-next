"use client";

import "sweetalert2/src/sweetalert2.scss";

import { FC } from "react";
import Swal from "sweetalert2";

import { updateTodo } from "@/service/todo.service";
import { TodoCardProps } from "@/types";

const TodoCard: FC<TodoCardProps> = ({ isDone, name, note, id, mutate }) => {
  const handleUpdateTodo = () => {
    Swal.fire({
      title: "Sukses!",
      text: "Melakukan edit todo",
      icon: "success",
      confirmButtonText: "Cool",
    });
  };

  const handleDoneTodo = () => {
    const payload = {
      name: name,
      note: note,
      is_complete: true,
    };

    updateTodo(payload, id)
      .then((res: any) => {
        mutate();
        Swal.fire({
          title: "Sukses!",
          text: res.message,
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((err: any) => {
        Swal.fire({
          title: "Gagal!",
          text: err?.response?.data?.message || err?.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const handleUndoneTodo = () => {
    const payload = {
      name: name,
      note: note,
      is_complete: false,
    };

    updateTodo(payload, id)
      .then((res: any) => {
        mutate();
        Swal.fire({
          title: "Sukses!",
          text: res.message,
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((err: any) => {
        Swal.fire({
          title: "Gagal!",
          text: err?.response?.data?.message || err?.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className="p-5 rounded-lg border flex flex-col gap-2 mb-2">
      <div className="flex flex-col">
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-xs">2 hari yang lalu</div>
      </div>
      <p className="rounded-lg bg-slate-100 p-3 text-sm italic">{note}</p>
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
