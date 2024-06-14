import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const signInForm = z.object({
      username: z.string(),
      password: z.string()
})
type SignInForm = z.infer<typeof signInForm>


export function SignIn() {
      const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>();

      async function handleSignIn(data: SignInForm) {
            console.log(data)
            try {
                  await new Promise(resolve => setTimeout(resolve, 2000))
                  //toast.success("Você foi Autenticado com Sucesso!")
                  throw new Error()

            } catch (error) {
                  toast.error("Houve Um Erro!",{ description: "Contate a TI",
                        action: {
                              label: "Abrir um Chamado",
                              onClick: () => window.open('https://nexus.lojasmm.com.br/marketplace/formcreator/front/formdisplay.php?id=30')
                        }
                  })
            }
      }

      return (
            <><Helmet title="Entrar" />
                  <div className="p-8">
                        <div className="w-[350px] flex flex-col justify-center gap-6">
                              <div className="flex flex-col gap-2 text-center">
                                    <h1 className="text-2xl font-semibold tracking-tight">Acessar Painel</h1>
                                    <p className="text-sm text-muted-foreground">Gerencie todos os seus Chamados</p>
                              </div>

                              <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
                                    <div className="space-y-2">
                                          <Label htmlFor="username" className="font-medium">Usuário</Label>
                                          <Input id="username" type="text" {...register('username')} />

                                    </div>
                                    <div className="space-y-2">
                                          <Label htmlFor="senha" className="font-medium">Senha</Label>
                                          <Input id="senha" type="password" {...register('password')} />

                                    </div>

                                    <Button disabled={isSubmitting} className="w-full" type="submit">Acessar Painel</Button>
                              </form>
                        </div>
                  </div>
            </>
      )
}