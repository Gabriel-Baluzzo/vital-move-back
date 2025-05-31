export interface ITokenService {
  generateToken(
    userId: number,
    email: string,
    rol: string,
    nivel_actual_id: number,
  ): { access_token: string };
}
