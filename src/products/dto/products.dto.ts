export class CreateProductDTO {
  readonly name: string;
  readonly descriotion: string;
  readonly price: number;
  readonly imageUrl: string;
  readonly active: boolean;
  readonly createdAt: Date;
}
