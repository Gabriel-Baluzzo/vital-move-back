import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoDto } from './create-video.dto';

/**
 * DTO para la actualización de un video.
 *
 * Extiende de CreateVideoDto con todos sus campos opcionales para permitir
 * la actualización parcial de los datos del video.
 */
export class UpdateVideoDto extends PartialType(CreateVideoDto) {}
