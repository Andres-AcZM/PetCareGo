import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile">
        <h2 className="text-2xl font-bold mb-4">Perfil de Usuario</h2>
        <img src={user?.picture} alt={user?.name} className="profile-picture" />
        <p className="text-lg font-semibold">Nombre: {user?.name}</p>
        <p className="text-lg">Email: {user?.email}</p>
      </div>
    )
  );
}