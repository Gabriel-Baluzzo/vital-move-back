export interface ITokenService {
  generateToken(
    userId: number,
    email: string,
    rol: string,
  ): { access_token: string };
}
