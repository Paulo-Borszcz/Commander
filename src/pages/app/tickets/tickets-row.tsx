import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { InfoIcon, Link } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TicketsDetails } from "./tickets-details";
import { useQuery } from "@tanstack/react-query";
import { getTickets } from "@/api/get-tickets";
import { handleRedirect } from "./tickets";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export function TicketsRow() {
      const idToText = true;
      const { data: tickets, isLoading: isLoadingTickets } = useQuery({
            queryKey: ['tickets', idToText],
            queryFn: getTickets,
      });

      console.log(tickets);

      return (
            <>
                  {Array.isArray(tickets) && tickets.map((ticket: { _id: Key | null | undefined; glpiID: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; statusGLPI: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; grupoRequerenteID: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; tecnicoN1: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; dataCriacao: string | number | Date; }) => (
                        <TableRow key={ticket?._id}>
                              <TableCell className="font-mono text-sm font-medium">{ticket?.glpiID}</TableCell>
                              <TableCell className="text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                          <span className="h-2 w-2 rounded-full bg-transparent border-2 border-green-500"></span>
                                          <span className="font-medium text-muted-foreground">Atribuído</span>
                                    </div>
                              </TableCell>
                              <TableCell className="text-muted-foreground">{ticket?.statusGLPI}</TableCell>
                              <TableCell className="text-muted-foreground">{ticket?.grupoRequerenteID}</TableCell>
                              <TableCell className="text-muted-foreground">{ticket?.tecnicoN1}</TableCell>
                              <TableCell className="text-muted-foreground">{new Date(ticket?.dataCriacao).toLocaleString()}</TableCell>
                              <TableCell>
                                    <Button variant={"outline"} size={"xs"} onClick={() => handleRedirect(`https://nexus.lojasmm.com.br/front/ticket.form.php?id=${ticket.glpiID}`)}>
                                          <Link className="h-4 w-4" />
                                          <span className="sr-only">Abrir Chamado no Nexus</span>
                                    </Button>
                              </TableCell>
                              <TableCell>
                                    <Dialog>
                                          <DialogTrigger asChild>
                                                <Button variant={"outline"} size={"xs"}>
                                                      <InfoIcon className="w-4 h-4" />
                                                      <span className="sr-only">Detalhes do Chamado</span>
                                                </Button>
                                          </DialogTrigger>
                                          <TicketsDetails />
                                    </Dialog>
                              </TableCell>
                        </TableRow>
                  ))}
            </>
      )
}
