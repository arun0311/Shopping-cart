import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ShoppingService } from 'src/app/service/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  public dataSource = new MatTableDataSource();
  public displayedColumns = ['product', 'color', 'totalQuantity', 'price', 'quantitySelected', 'addToCart'];
  public addCart: any;

  constructor(private service: ShoppingService) { }

  ngOnInit(): void {
    this.getShoppingItems();
  }

  /**
   * @method getShoppingItems
   */
  private getShoppingItems() {
    const quantity = {"quantitySelected": 0};
    this.service.getItemList().subscribe(data => {
      data.items.forEach((element: any, index: number) => {
        data.items[index] = {...element, ...quantity}
      });
      this.dataSource = new MatTableDataSource(data.items);
    })
  }

  /**
   * @method addToCart
   * @description add the product to cart
   */
  public addToCart(selectedRow: any, index: number) {
    selectedRow.quantitySelected += 1;
    selectedRow.totalQuantity = selectedRow.totalQuantity - 1;
    this.service.cartItem.next(this.dataSource.data);
  }

}
