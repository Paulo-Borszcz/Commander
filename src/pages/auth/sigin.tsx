import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMutation } from "@tanstack/react-query"
import { signIn } from "@/api/sign-in"
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'

const signInForm = z.object({
      username: z.string(),
      password: z.string()
})
type SignInForm = z.infer<typeof signInForm>

type ErrorKey = "invalid credentials" | "user not found" | "password is required" | "username is required" | "default";

interface ErrorMessages {
      [key: string]: {
            title: string;
            description: string;
            action?: {
                  label: string;
                  onClick: () => void;
            };
      };
}

const errorMessages: ErrorMessages = {
      "invalid credentials": {
            title: "Senha Incorreta!",
            description: "Insira novamente sua Senha",
      },
      "user not found": {
            title: "Usuário Não Encontrado!",
            description: "Por favor, verifique suas credenciais e tente novamente.",
      },
      "password is required": {
            title: "Senha não Inserida!",
            description: "Por favor, insira sua Senha!",
      },
      "username is required": {
            title: "Usuário não Inserido!",
            description: "Por favor, insira seu Usuário!",
      },
      "default": {
            title: "Houve Um Erro!",
            description: "Contate a TI",
            action: {
                  label: "Abrir um Chamado",
                  onClick: () => window.open('https://nexus.lojasmm.com.br/marketplace/formcreator/front/formdisplay.php?id=30')
            }
      }
};



export function SignIn() {
      const navigate = useNavigate()

      const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>();

      const { mutateAsync: authenticate } = useMutation({
            mutationFn: signIn,

      })

      async function handleSignIn(data: SignInForm) {
            try {
                  const result = await authenticate({ username: data.username, password: data.password })
                  Cookies.set('authToken', result.token, { expires: 1, sameSite: 'Lax'})
                  Cookies.set('userName', result.userInfo.username, { expires: 1, sameSite: 'Lax'})
                  Cookies.set('userRealname', result.userInfo.realname, { expires: 1, sameSite: 'Lax'})
                  Cookies.set('userType', result.userInfo.userType, { expires: 1, sameSite: 'Lax'})
                  navigate("/")

                  toast.success("Você foi Autenticado com Sucesso!")

            }
            catch (error: any) {
                  const errorMessageKey = error.response?.data?.msg as ErrorKey;
                  const errorMessage = errorMessages[errorMessageKey] || errorMessages["default"];

                  toast.warning(errorMessage.title, {
                        description: errorMessage.description,
                        action: errorMessage.action
                  });
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