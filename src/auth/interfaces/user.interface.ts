export interface User {
  id: number;
  email: string;
  password: string;
  perfil: {
    rol: string;
  } | null;
}
