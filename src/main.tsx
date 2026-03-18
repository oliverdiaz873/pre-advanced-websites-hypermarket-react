import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// la inyeccion de react en el div con id="root" se hace en el archivo index.html
// aqui es donde ocurre la inyeccion de react en el div con id="root" y se renderiza el componente App
// render es el método que renderiza componentes React.
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
