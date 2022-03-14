import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  /**
   * @method openCart
   * @description open up the cart in dialog
   */
   public openCart() {
    const dialogRef = this.dialog.open(CartComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }

}
