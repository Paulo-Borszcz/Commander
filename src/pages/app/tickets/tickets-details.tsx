import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function TicketsDetails() {
      return (
            <DialogContent>
                  <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">Chamado 198 907 | HelpDesk - TI</DialogTitle>
                        <DialogDescription className="text-sm my-2">Detalhes do Chamado:</DialogDescription>
                        <Table>
                              <TableBody>
                                    
                                    <TableRow>
                                          <TableCell className="text-muted-foreground">IP: </TableCell>
                                          <TableCell className="flex justify-end">
                                                <span>192.168.0.0</span>
                                          </TableCell>
                                    </TableRow>

                                    <TableRow>
                                          <TableCell className="text-muted-foreground">Categoria: </TableCell>
                                          <TableCell className="flex justify-end">
                                                <span className="text-xs">{`HELPDESK > 05. Instalação de programas`}</span>
                                          </TableCell>
                                    </TableRow>

                                    <TableRow>
                                          <TableCell className="text-muted-foreground">Telefone: </TableCell>
                                          <TableCell className="flex justify-end">
                                                <span>(45) 3122-6810</span>
                                          </TableCell>
                                    </TableRow>

                                    <TableRow>
                                          <TableCell className="text-muted-foreground">Descrição: </TableCell>
                                          <TableCell className="flex justify-end">
                                                <span className="text-xs">Preciso baixar um arquivo de carro de som e o Pen drive nao esta abrindo na pasta arquivo, maquina nova  nao sei se precisa configurar alguma coisa.</span>
                                          </TableCell>
                                    </TableRow>

                              </TableBody>
                        </Table>
                  </DialogHeader>
            </DialogContent>
      )
}