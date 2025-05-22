export interface ITokenService {
  generateToken(
    userId: number,
    email: string,
    role: string,
  ): { access_token: string };
}
