export interface BaseModel {
  readonly id: string;
  createdAt: Date;
  updatedAt: Date;
}

let user: [string, number];