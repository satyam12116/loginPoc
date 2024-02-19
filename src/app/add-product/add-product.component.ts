import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  productName: string = '';
  productPrice: number = 0;
  productQty: number = 0;

  constructor(private productService: ProductService, private router: Router) {}

  addProduct() {
    const newProduct = {
      productName: this.productName,
      productPrice: this.productPrice,
      productQty: this.productQty,
    };

    this.productService.addProduct(newProduct).subscribe(() => {
      this.router.navigate(['/product-list']);
    });
  }
}
