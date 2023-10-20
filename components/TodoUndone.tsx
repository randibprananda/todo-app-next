"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";

import TodoCard from "@/components/TodoCard";
import { getTodos } from "@/service/todo.service";
import { Todo } from "@/types";

const TodoUndone = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { data: todosData, error, mutate } = useSWR("/todos", getTodos);

  useEffect(() => {
    if (todosData?.data) {
      setTodos(() => todosData?.data.filter((todo: Todo) => todo.is_complete === false));
    }
  }, [todosData]);

  return (
    <div className="flex flex-col space-y-5">
      <h1 className="text-3xl">Todo Undone</h1>
      <div className="flex flex-col gap-2">
        {todos.length > 0
          ? todos.map((todo: Todo) => {
              return (
                <TodoCard
                  key={todo?.id}
                  id={todo?.id}
                  isDone={todo?.is_complete}
                  name={todo?.name}
                  note={todo?.note}
                  mutate={mutate}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default TodoUndone;
