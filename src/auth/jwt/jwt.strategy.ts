import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt.payload';
import { ConfigService } from '@nestjs/config';

/**
 * Estrategia JWT para Passport que valida y extrae
 * el payload del token JWT enviado en las peticiones HTTP.
 *
 * Utiliza la configuración para obtener la clave secreta
 * y extrae el token del header Authorization tipo Bearer.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * Inicializa la estrategia JWT configurando:
   * - Cómo extraer el token del request.
   * - Validación de expiración.
   * - Clave secreta para validar el token.
   *
   * @param configService Servicio para acceder a variables de entorno.
   */
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET')!,
    });
  }

  /**
   * Método que valida el payload decodificado del JWT.
   *
   * @param payload Payload extraído y decodificado del token.
   * @returns El mismo payload si es válido.
   */
  validate(payload: JwtPayload): JwtPayload {
    return payload;
  }
}
