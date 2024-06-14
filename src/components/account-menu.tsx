import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { DropdownMenu } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, LogOut, Settings } from "lucide-react";

export function AccountMenu() {
      return (
            <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                        <Button variant={"outline"} className="flex items-center gap-2 select-none">
                              HelpDesk
                              <ChevronDown/>
                        </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel className="flex flex-col">
                              <span>Paulo Felipe Borszcz</span>
                              <span className="text-xs font-normal text-muted-foreground">paulo-borszcz@lojasmm.com.br</span>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>
                              <Settings className="w-4 h-4 mr-2"/>
                              <span>Configurações da Conta</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                              <LogOut className="w-4 h-4 mr-2"/>
                              <span>Sair</span>
                        </DropdownMenuItem>
                  </DropdownMenuContent>
            </DropdownMenu>
      )
}