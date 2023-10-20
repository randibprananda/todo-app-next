import { axiosInstance } from "@/lib/axios";
import { TodoDto } from "@/types";

export const updateTodo = async (payload: TodoDto, id: number) => {
  const response = await axiosInstance.patch(`/todos/${id}`, payload);
  return response?.data;
};

export const addTodo = async (payload: TodoDto) => {
  const response = await axiosInstance.postForm(`/todos/`, payload);
  return response?.data;
};

export const getTodos = () => axiosInstance.get("/todos").then((response) => response.data);
