import Todo from "@/components/Todo";
import TodoDone from "@/components/TodoDone";

const Page = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Todo />
      </div>
      <div>
        <TodoDone />
      </div>
    </div>
  );
};

export default Page;
