import { SetMetadata } from '@nestjs/common';
import { Action } from '../interfaces/action.enum';

export interface RequiredPermission {
  action: Action;
  subject: string;
}

export const Permission = (action: Action, subject: string) =>
  SetMetadata('permissions', [{ action, subject }]);
