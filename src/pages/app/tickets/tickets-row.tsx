import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { InfoIcon, Link } from "lucide-react";
import { handleRedirect } from "./tickets";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TicketsDetails } from "./tickets-details";


export function TicketsRow() {
      return (
            <TableRow>
                  <TableCell className="font-mono text-sm font-medium">198 907</TableCell>
                  <TableCell className="text-muted-foreground">
                        <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-transparent border-2 border-green-500"></span>
                              <span className="font-medium text-muted-foreground">Atribuído</span>
                        </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">TRANSFERIDO</TableCell>
                  <TableCell className="text-muted-foreground">GP ADM</TableCell>
                  <TableCell className="text-muted-foreground">Paulo Felipe Borszcz</TableCell>
                  <TableCell className="text-muted-foreground">14-06-2024 08:25</TableCell>
                  <TableCell>
                        <Button variant={"outline"} size={"xs"} onClick={handleRedirect('https://nexus.lojasmm.com.br/front/ticket.form.php?id=198907')}>
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
                              <TicketsDetails/>
                        </Dialog>
                  </TableCell>
            </TableRow>
      )
}