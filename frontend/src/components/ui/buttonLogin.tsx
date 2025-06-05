import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="text-center mb-4">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded mb-4"
        onClick={() => loginWithRedirect()}
      >
        Iniciar sesión
      </button>
    </div>
  );
}