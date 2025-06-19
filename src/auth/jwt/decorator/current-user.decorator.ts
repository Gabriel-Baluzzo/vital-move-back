import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from 'src/auth/jwt/jwt.payload';
import { Request } from 'express';

/**
 * Decorador personalizado para obtener el usuario actual autenticado
 * desde el contexto de la petición HTTP.
 *
 * Extrae el payload del token JWT que representa al usuario autenticado.
 *
 * @example
 * ```ts
 * @Get()
 * async find(@CurrentUser() user: JwtPayload) {
 *   return user;
 * }
 * ```
 *
 * @returns El payload JWT del usuario autenticado.
 */
export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): JwtPayload => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return request.user as JwtPayload;
  },
);
