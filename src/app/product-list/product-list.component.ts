import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.products = this.products.filter((product) => product.id !== productId);
    });
  }
}
