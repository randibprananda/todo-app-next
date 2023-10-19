import { axiosInstance } from "@/lib/axios";

export const fetcher = (url: string) => axiosInstance.get(url).then((response) => response.data);
