import TodoCard from "@/components/TodoCard";

const Todo = () => {
  return (
    <div className="flex flex-col space-y-5">
      <h1 className="text-3xl">Todo</h1>
      <div className="flex flex-col gap-2">
        <TodoCard isDone={false} />
        <TodoCard isDone={false} />
        <TodoCard isDone={false} />
        <TodoCard isDone={false} />
        <TodoCard isDone={false} />
      </div>
    </div>
  );
};

export default Todo;
