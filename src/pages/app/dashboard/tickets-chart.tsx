import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line} from 'recharts'
import colors from 'tailwindcss/colors'

const data = [
      {date: "01/06", tickets: 8},
      {date: "02/06", tickets: 3},
      {date: "03/06", tickets: 4},
      {date: "04/06", tickets: 3},
      {date: "05/06", tickets: 5},
      {date: "06/06", tickets: 4},
      {date: "07/06", tickets: 4},
      {date: "08/06", tickets: 6},
      {date: "09/06", tickets: 5},
      {date: "10/06", tickets: 3},
      {date: "11/06", tickets: 2},
      {date: "12/06", tickets: 5},
      {date: "13/06", tickets: 6},
      {date: "14/06", tickets: 2},

]

export function TicketsChart() {
      return(
            <Card className="col-span-6">
                  <CardHeader className="flex-row items-center justify-between pb-8">
                        <div className="space-y-1">
                              <CardTitle className="text-2xl font-bold tracking-tight">Chamados no Período</CardTitle>
                              <CardDescription>Chamados Diários no Período</CardDescription>
                        </div>
                  </CardHeader>
                  <CardContent>
                        <ResponsiveContainer width="100%" height={240}>
                              <LineChart data={data} style={{ fontSize: 12 }}>
                                    <YAxis stroke="#888" axisLine={false} tickLine={false} width={100} tickFormatter={(value : String) => value + " Chamados"}/>
                                    <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16}/>
                                    <CartesianGrid vertical={false} className="stroke-muted"/>
                                    <Line type="linear" strokeWidth={3} dataKey="tickets" stroke={colors.red['600']}/>
                              </LineChart>
                        </ResponsiveContainer>
                  </CardContent>
            </Card>
      )
}