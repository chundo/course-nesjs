import { Injectable } from '@nestjs/common';
import { Role } from './roles.interface';

@Injectable()
export class RolesService {
  private readonly roles: Role[] = [];

  create(role: Role) {
    this.roles.push(role);
  }

  findAll(): Role[] {
    return this.roles;
  }
}
