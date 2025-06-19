import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Guardia de autenticación basado en JWT.
 *
 * Extiende el guardia predeterminado de Passport para
 * proteger rutas mediante validación de tokens JWT.
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
