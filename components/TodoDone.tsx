import TodoCard from "@/components/TodoCard";

const TodoDone = () => {
  return (
    <div className="flex flex-col space-y-5">
      <h1 className="text-3xl">Todo</h1>
      <div className="flex flex-col gap-2">
        <TodoCard isDone={true} />
        <TodoCard isDone={true} />
        <TodoCard isDone={true} />
        <TodoCard isDone={true} />
        <TodoCard isDone={true} />
      </div>
    </div>
  );
};

export default TodoDone;
