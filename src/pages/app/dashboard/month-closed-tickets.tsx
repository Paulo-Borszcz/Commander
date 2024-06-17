import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck } from "lucide-react";

export function MonthClosedTickets() {
      return (
            <Card>
                  <CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
                        <CardTitle className="text-2xl font-bold tracking-tight flex gap-2">Chamados Solucionados <span className="text-muted-foreground">(Mês)</span></CardTitle>
                        <CalendarCheck className="h-4 w-4" />
                  </CardHeader>
                  <CardContent className="space-y-1">
                        <span className="text-2xl font-bold tracking-tight text-emerald-500 dark:text-emerald-400">60 Chamados</span>
                        <p className="text-xs text-muted-foreground">Fechados/Solucionados por você até o momento atual. <span className="text-emerald-500 dark:text-emerald-400">+2 em relação ao mês anterior</span></p>
                  </CardContent>
            </Card>
      )
}