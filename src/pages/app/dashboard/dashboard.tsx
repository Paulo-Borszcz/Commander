import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarCheck } from "lucide-react"
import { Helmet } from "react-helmet-async"

export function Dashboard() {
      return(
            <><Helmet title="Dashboard"/>
            <div className="flex flex-col gap-4">
                  <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

                  <div className="grid grid-cols-4 gap-4">
                        <Card>
                              <CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
                                    <CardTitle className="text-base font-semibold">Chamados Solucionados (mês)</CardTitle>
                                    <CalendarCheck className="h-4 w-4"/>
                              </CardHeader>
                              <CardContent className="space-y-1">
                                    <span className="text-2xl font-bold tracking-tight">68 Chamados</span>
                                    <p className="text-xs text-muted-foreground">Fechados/Solucionados por você até o momento atual</p>
                              </CardContent>
                        </Card>
                  </div>
            </div>
            </>
      )
}