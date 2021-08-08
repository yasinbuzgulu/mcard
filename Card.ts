import {ICard} from "./interface/ICard";
import { DiscountAmount } from "./enum/types";
/**
 * Programda tanımlı kartların ID, fiyat, son kullanım tarihi ve indirim miktarlarının belirlendiği sınıf
 */
export class Card implements ICard {
  private _identity: number;
  private _price: number;
  private _expiryDate: Date;
  private _discountAmount : DiscountAmount;

  constructor(identity: number, price:number, expiryDate: Date, discountAmount : DiscountAmount){
    this._identity = identity;
    this._price = price;
    this._expiryDate = expiryDate;
    this._discountAmount = discountAmount;

  }

  get Identity() {
    return this._identity;
  }
  set Identitty(identity) {
    this._identity = identity;
  }

  get Price() {
    return this._price;
  }
  set Price(price) {
    this._price = price;
  }

  get ExpiryDate() {
    return this._expiryDate;
  }
  set ExpiryDate(expiryDate) {
    this._expiryDate = expiryDate;
  }

  get DiscountAmount() {
    return this._discountAmount;
  }
  set DiscountAmount(discountAmount) {
    this._discountAmount = discountAmount;
  }

}