import { api } from "@/lib/axios"

export interface TicketsBody {
      idToText: Boolean
}

export async function getTickets({ queryKey }: { queryKey: [string, boolean] }) {
      const [, idToText] = queryKey;
      const response = await api.get('/user/tickets', {
        params: { idToText },
      });
      return response.data;
    }