import TodoDone from "@/components/TodoDone";
import TodoUndone from "@/components/TodoUndone";

const Page = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <TodoUndone />
      </div>
      <div>
        <TodoDone />
      </div>
    </div>k
  );
};

export default Page;
