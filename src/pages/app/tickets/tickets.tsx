import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from "react-helmet-async";
import { TicketsRow } from "./tickets-row";
import { TicketsTableFilters } from "./tickets-table-filters";
import { Pagination } from "@/components/pagination";

export const handleRedirect = (url: string) => (_event: React.MouseEvent<HTMLButtonElement>): void => {
      window.open(url);
};




export function Tickets() {
      return (
            <>
                  <Helmet title='Chamados' />
                  <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-bold tracking-tight">Chamados</h1>
                        <div className="space-y-2.5">
                              <TicketsTableFilters />

                              <div className="border rounded-md">
                                    <Table>
                                          <TableHeader>
                                                <TableRow>
                                                      <TableHead>ID</TableHead>
                                                      <TableHead>Status</TableHead>
                                                      <TableHead>Categoria</TableHead>
                                                      <TableHead>Grupo Requerente</TableHead>
                                                      <TableHead>Técnico</TableHead>
                                                      <TableHead>Data de Criação</TableHead>
                                                      <TableHead></TableHead>
                                                      <TableHead></TableHead>
                                                </TableRow>
                                          </TableHeader>
                                          <TableBody>
                                                {Array.from({ length: 6 }).map((_, i) => {
                                                      return <TicketsRow key={i} />
                                                })}
                                          </TableBody>
                                    </Table>
                              </div>
                              <Pagination pageIndex={0} totalCount={105} perPage={6}/>
                        </div>
                  </div>
            </>
      )
}