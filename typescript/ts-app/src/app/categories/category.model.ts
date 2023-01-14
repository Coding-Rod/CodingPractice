import { BaseModel } from './../base.model';

export interface Category extends BaseModel {
  id: string | number;
  name: string;
}