import { Product } from "../models/product.model";
import { UpdateProductDTO } from "../dtos/product.dto";
import { ProductHttpService } from "./product-http2.service";
import { validate } from 'class-validator';
export class ProductCRUDService {
  private readonly URL = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService(this.URL);

  async update(id: Product['id'], changes: UpdateProductDTO) {
    //validate(dto);
    const product = await this.http.update(id, changes);
    // this.http.otroRequest();
    return product;
  }
}