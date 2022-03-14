import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/service/shopping.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartItems: any = [];
  public totalPrice: number = 0;

  constructor(private service: ShoppingService) {
    
    this.service.cartItem.subscribe(data => {
      data.forEach((element: any) => {
        if (element.quantitySelected >= 1) {
          this.cartItems.push(element);
          this.totalPrice += (element.quantitySelected * element.price);
        }
      });
    })
  }

  ngOnInit(): void { }

  /**
   * @method removeItemFromCart
   * @description remove item from cart
   */
  public removeItemFromCart(removeItemRow: any, index: number) {
    removeItemRow.quantitySelected = removeItemRow.quantitySelected - 1;
    this.totalPrice = this.totalPrice - removeItemRow.price;
    removeItemRow.totalQuantity += 1;
    this.cartItems[index] = removeItemRow;
    this.service.cartItem.next(this.cartItems);
  }

}
