import { Dispatch, FC, SetStateAction } from "react";

import AddTodoForm from "@/components/AddTodoForm";

interface AddTodoModalProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const AddTodoModal: FC<AddTodoModalProps> = ({ setOpenModal }) => {
  return (
    <div className="bg-white/50 fixed inset-0 w-full h-full z-[2] flex flex-col items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg relative">
        <button
          className="bg-rose-500 absolute rounded-full p-2 right-1 top-1"
          onClick={() => setOpenModal(false)}>
          X
        </button>
        <div>
          <AddTodoForm setOpenModal={setOpenModal} />
        </div>
      </div>
    </div>
  );
};

export default AddTodoModal;
