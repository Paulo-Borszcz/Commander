import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { DropdownMenu } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, LogOut, Settings } from "lucide-react";
import Cookies from "js-cookie";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { AccountProfileDialog } from "./account-profile-dialog";

export function AccountMenu() {
      const userRealname = Cookies.get('userRealname') ?? 'Nome não disponível';
      const userType = Cookies.get('userType')?.toUpperCase() ?? 'Tipo não Disponível';
      const userName = Cookies.get('userName') ?? 'Username não Disponível'
      return (
            <Dialog>
                  <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                              <Button variant={"outline"} className="flex items-center gap-2 select-none">
                                    HelpDesk
                                    <ChevronDown />
                              </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                              <DropdownMenuLabel className="flex flex-col">
                                    <span>{userRealname} - {userType}</span>
                                    <span className="text-xs font-normal text-muted-foreground">{userName}@lojasmm.com.br</span>
                              </DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DialogTrigger asChild>
                                    <DropdownMenuItem>
                                          <Settings className="w-4 h-4 mr-2" />
                                          <span>Configurações da Conta</span>
                                    </DropdownMenuItem>
                              </DialogTrigger>
                              <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                                    <LogOut className="w-4 h-4 mr-2" />
                                    <span>Sair</span>
                              </DropdownMenuItem>
                        </DropdownMenuContent>
                  </DropdownMenu>

                  <AccountProfileDialog />
            </Dialog>
      )
}