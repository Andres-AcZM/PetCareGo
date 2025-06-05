import React from 'react'
import { LoginButton } from '../components/ui/buttonLogin'
import { LogoutButton } from '../components/ui/buttonLogout'
import Profile from '../components/authentication/profile'
import { useAuth0 } from '@auth0/auth0-react'
import logo_petcarego from '../img/logo_pet.png'
import '../App.css'

function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold mb-4">PetCareGo!</h1>
        <img src={logo_petcarego} alt="Logo PetCareGo" className="logo" />
        <p className="text-gray-600 mb-4">Bienvenido a PetCareGo!</p>
        <p className="text-lg mb-4">Tu plataforma para el cuidado de mascotas</p>
        {isAuthenticated ? (
          <>
            <p className="text-green-500 mb-4">¡Has iniciado sesión correctamente!</p>
            <LogoutButton />
            <Profile />
          </>
        ) : (
          <>
            <p className="text-red-500 mb-4">Por favor, inicia sesión para continuar.</p>
            <LoginButton />
          </>
        )}
        <p className="text-sm text-gray-500 mt-4">© 2025 PetCareGo! Todos los derechos reservados.</p>
      </header>
    </div>
  )
}

export default App
