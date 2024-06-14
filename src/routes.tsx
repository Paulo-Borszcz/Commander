import { createBrowserRouter } from "react-router-dom";

import { Dashboard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/sigin";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Tickets } from "./pages/app/tickets/tickets";

export const router = createBrowserRouter([
      { 
            path: '/',
            element: <AppLayout/>,
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
