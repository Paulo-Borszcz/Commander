import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings2 } from "lucide-react";

export function ManageTickets() {
      return (
            <Card>
                  <CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
                        <CardTitle className="text-2xl font-bold tracking-tight">Gerenciamento</CardTitle>
                        <Settings2 className="h-4 w-4" />
                  </CardHeader>
                  <CardContent className="space-y-3">
                        <div className="flex items-center gap-2">
                              <Switch defaultChecked id="online-mode" />
                              <Label className="font-semibold" htmlFor="online-mode">Atribuição Automática</Label>
                        </div>
                        <div className="flex items-center gap-2">
                              <Switch id="notification-mode" />
                              <Label className="font-semibold flex gap-2" htmlFor="notification-mode">Notificação via Discord <Badge className="h-4 px-1 font-bold">BETA</Badge></Label>
                        </div>
                  </CardContent>
            </Card>
      )
}