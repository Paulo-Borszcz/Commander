import { Button } from "./ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function AccountProfileDialog() {
      return(
            <DialogContent>
                  <DialogHeader>
                        <DialogTitle>Perfil Do Usuário</DialogTitle>
                        <DialogDescription>Atualize suas Informações</DialogDescription>
                  </DialogHeader>

                  <form>
                        <div className="space-y-4 gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                    <Label className="text-right text-sm font-semibold" htmlFor="user">Username Discord:</Label>
                                    <Input className="col-span-3" id="user"></Input>
                              </div>

                        </div>


                  <DialogFooter>
                        <Button type="button" variant={"ghost"}>Cancelar</Button>
                        <Button type="submit" variant={"success"}>Salvar</Button>
                  </DialogFooter>
                  </form>
            </DialogContent>
      )
}