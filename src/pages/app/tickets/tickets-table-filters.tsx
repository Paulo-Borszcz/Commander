import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, X } from "lucide-react"

export function TicketsTableFilters() {
      return (
            <form className="flex items-center gap-2">
                  <span className="text-sm font-semibold">Filtros:</span>

                  <Input className="h-8 w-auto" placeholder="ID do Chamado" />
                  <Select defaultValue="all">
                        <SelectTrigger className="h-8 w-[320px]">
                              <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                              <SelectGroup>
                                    <SelectLabel>Status:</SelectLabel>
                                    <SelectItem value="all">Todos os Status</SelectItem>
                                    <SelectItem value="atribuido">Atribuído</SelectItem>
                                    <SelectItem value="pendente">Pendente</SelectItem>
                                    <SelectItem value="solucionado">Solucionado</SelectItem>
                                    <SelectItem value="fechado">Fechado</SelectItem>
                              </SelectGroup>
                        </SelectContent>
                  </Select>
                  <Button type="submit" variant={"secondary"} size={'xs'}>
                        <Search className="h-4 w-4 mr-2" />
                        Filtrar Resultados
                  </Button>
                  <Button type="button" variant={"outline"} size={'xs'}>
                        <X className="h-4 w-4 mr-2" />
                        Remover Filtros
                  </Button>

            </form>
      )
}