import { axiosInstance } from "@/lib/axios";
import { TodoDto } from "@/types";

export const updateTodo = async (payload: TodoDto, id: number) => {
  const response = await axiosInstance.patch(`/todos/${id}`, payload);
  return response.data;
};
