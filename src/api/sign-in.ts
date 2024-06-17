import { api } from "@/lib/axios";
import Cookies from "js-cookie";


api.interceptors.request.use(
  config => {
    const token = Cookies.get('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export interface SignInBody {
      username: string,
      password: string
      }

export async function signIn({ username, password }: SignInBody) {
  const response = await api.post('/auth/login', { username, password });
  return response.data;
}
