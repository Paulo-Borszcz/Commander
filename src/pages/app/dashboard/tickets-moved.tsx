import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeftRight } from "lucide-react";

export function TicketsMoved() {
      return(
            <Card>
                  <CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
                        <CardTitle className="text-xl font-bold tracking-tight flex gap-2">Chamados Transferidos <span className="text-muted-foreground">(Mês)</span></CardTitle>
                        <ArrowLeftRight className="h-4 w-4" />
                  </CardHeader>
                  <CardContent className="space-y-1">
                        <span className="text-2xl font-bold tracking-tight text-yellow-500 dark:text-yellow-400">12 Chamados</span>
                        <p className="text-xs text-muted-foreground">Transferidos para outros setores por você até o momento atual. <span className="text-yellow-500 dark:text-yellow-400">-3 em relação ao mês anterior</span></p>
                  </CardContent>
            </Card>
      )
}