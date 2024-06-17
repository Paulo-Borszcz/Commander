import { api } from "@/lib/axios";

export interface SignInBody {
      username: string,
      password: string
}

export async function signIn({ username, password }: SignInBody) {
      const response = await api.post('/auth/login', { username, password });
      return response.data;
}