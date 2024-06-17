import { createBrowserRouter } from "react-router-dom";


import { SignIn } from "./pages/auth/sigin";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Tickets } from "./pages/app/tickets/tickets";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { NotFound } from "./pages/404";

export const router = createBrowserRouter([
      { 
            path: '/',
            element: <AppLayout/>,
            errorElement: <NotFound/>,
            children: [
                  { path: '/', element: <Dashboard/> },
                  { path: '/chamados', element: <Tickets/> },
            ]

      },
      { 
            path: '/',
            element: <AuthLayout/>,
            children: [
                  { path: '/sign-in', element: <SignIn/> },
            ]

      },
      
])
