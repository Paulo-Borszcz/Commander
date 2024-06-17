import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Target } from "lucide-react";

export function DayTicketsOverview() {
      return (
            <Card>
                  <CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
                        <CardTitle className="text-xl font-bold tracking-tight flex gap-2">Chamados Atuais<span className="text-muted-foreground">(Hoje)</span></CardTitle>
                        <Target className="h-4 w-4" />
                  </CardHeader>
                  <CardContent className="space-y-1">
                        <span className="flex w-full text-muted-foreground  items-center gap-2 text-lg"> <span className="w-3 h-3 rounded-full border-2 dark:border-white border-black bg-transparent"></span>Fechados/Solucionados: <span className="font-semibold text-foreground ml-2 text-lg"> 10</span></span>
                        <Separator />
                        <span className="flex w-full text-muted-foreground  items-center gap-2"><span className="w-3 h-3 rounded-full bg-orange-600"></span>Pendentes: <span className="font-semibold text-foreground ml-2 text-lg"> 2</span></span>
                        <Separator />
                        <span className="flex w-full text-muted-foreground  items-center gap-2"><span className="w-3 h-3 rounded-full border-2 border-green-500 bg-transparent"></span>Atribuidos: <span className="font-semibold text-foreground ml-2 text-lg"> 3</span></span>
                  </CardContent>
            </Card>
      )
}