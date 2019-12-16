export class CreateProductDTO {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly imageUrl: string;
  readonly active: boolean;
  readonly createdAt: Date;
}
