import { Injectable } from '@nestjs/common';
import { UpdateCredencialDto } from './dto/update-credencial.dto';
import { Credencial } from './entities/credencial.entity';
import * as bcrypt from 'bcrypt';

/**
 * Servicio encargado de gestionar la lógica de negocio relacionada
 * con las credenciales de usuario.
 *
 * Incluye operaciones de creación, actualización y búsqueda de credenciales.
 */
@Injectable()
export class CredencialService {
  /**
   * Crea una instancia del servicio de credenciales.
   *
   * @param credencial Entidad encargada del acceso a datos de credenciales.
   */
  constructor(private credencial: Credencial) {}

  /**
   * Actualiza una credencial existente.
   *
   * Si se proporciona una nueva contraseña en el DTO, será hasheada antes de almacenarse.
   *
   * @param id ID de la credencial a actualizar.
   * @param dto Datos a actualizar.
   * @returns La credencial actualizada.
   */
  async update(id: number, dto: UpdateCredencialDto) {
    const data = dto;
    if (dto.password) {
      data.password = await bcrypt.hash(dto.password, 10);
    }
    return this.credencial.update(id, data);
  }

  /**
   * Busca una credencial por su email.
   *
   * @param email Correo electrónico del usuario.
   * @returns La credencial encontrada junto con su perfil, o `null` si no existe.
   */
  async findByEmail(email: string) {
    return this.credencial.findByEmail(email);
  }

  /**
   * Crea una nueva credencial junto con su perfil asociado.
   *
   * @param email Correo electrónico del usuario.
   * @param password Contraseña hasheada del usuario.
   * @returns La credencial creada con su perfil.
   */
  async create(email: string, password: string) {
    return this.credencial.create(email, password);
  }
}
