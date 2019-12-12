export class CreateRoleDto {
  readonly name: string;
  readonly code: string;
}

export class UpdateRoleDto {
  readonly name: string;
  readonly code: string;
}

export class ListAllEntities {
  readonly name: string;
  readonly code: string;
  readonly limit: string;
}
