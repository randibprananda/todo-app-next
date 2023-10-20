import "sweetalert2/src/sweetalert2.scss";

import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useRef, useState } from "react";
import Swal from "sweetalert2";
import { mutate } from "swr";

import { addTodo } from "@/service/todo.service";

interface AddTodoFormProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const AddTodoForm: FC<AddTodoFormProps> = ({ setOpenModal }) => {
  const refName = useRef<HTMLInputElement | null>(null);
  const refNote = useRef<HTMLTextAreaElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<EventTarget>) => {
    e.preventDefault();

    if (!isLoading) {
      setIsLoading(true);

      const payload = {
        name: refName.current?.value,
        note: refNote.current?.value,
        is_complete: false,
      };

      addTodo(payload)
        .then((res: any) => {
          if (refName.current) {
            refName.current.value = "";
          }
          if (refNote.current) {
            refNote.current.value = "";
          }

          Swal.fire({
            title: "Sukses!",
            text: res.message,
            icon: "success",
            confirmButtonText: "Cool",
          });

          mutate("/todos");
        })
        .catch((err: any) => {
          Swal.fire({
            title: "Gagal!",
            text: err?.response?.data?.message || err?.message,
            icon: "error",
            confirmButtonText: "Ok",
          });
        })
        .finally(() => {
          setIsLoading(false);
          setOpenModal(false);
        });
    }
  };

  return (
    <form className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Label</label>
        <input
          id="name"
          type="text"
          className="rounded-lg p-3 bg-slate-100"
          ref={refName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => refName.current && (refName.current.value = e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Catatan</label>
        <textarea
          rows={3}
          className="rounded-lg p-3 bg-slate-100"
          ref={refNote}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            refNote.current && (refNote.current.value = e.target.value)
          }
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full text-center rounded-lg bg-blue-500 text-white font-semibold text-lg py-2"
          disabled={isLoading}
          onClick={handleSubmit}>
          {isLoading ? "Loading..." : "Add"}
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;
