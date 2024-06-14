import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'

export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider storageKey='commander-theme' defaultTheme='dark'>
      <Helmet titleTemplate='%s | Commander'/>
      <Toaster/>
       <RouterProvider router={router} />
       </ThemeProvider>
    </HelmetProvider>
  )
}
