import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  public cartItem = new BehaviorSubject(<any>[]);

  constructor(private http: HttpClient) { }

  /**
   * @method getItemList
   */
  public getItemList(): Observable<any> {
    const url = '../../assets/json/shopping-items.json'
    return this.http.get(url);
  }
}
