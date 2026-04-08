import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './styles/index.css'
import './styles/fonts.css'
import App from './App.tsx'

// la inyeccion de react en el div con id="root" se hace en el archivo index.html
// aqui es donde ocurre la inyeccion de react en el div con id="root" y se renderiza el componente App
// render es el método que renderiza componentes React.
// HelmetProvider permite que los componentes hijos usen <Helmet> para gestionar las meta tags del <head>
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </StrictMode>,
)
