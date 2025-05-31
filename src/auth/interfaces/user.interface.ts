export interface User {
  id: number;
  email: string;
  password: string;
  perfil: {
    rol: string;
    nivel_actual_id: number;
  } | null;
}
