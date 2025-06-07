/* eslint-disable prettier/prettier */
// src/auth/interfaces/user.interface.ts

// Define the structure of the Perfil relevant for the User interface
export interface UserProfile {
  rol: string;
  nivel_actual_id: number;
  // Include other relevant profile fields if your AuthService needs them
  // e.g., nombre?: string; fecha_nacimiento?: Date;
}

// Define the User interface, which largely corresponds to your Credencial model
// but explicitly includes the required Perfil properties.
export interface User {
  id: number;
  email: string;
  password?: string; // Password can be optional if not always fetched or needed
  perfil?: UserProfile; // Optional, as it might not be eager-loaded everywhere
}