
import { DiscountAmount } from "./../enum/types";


export interface ICard {
  

  Identitty : number;
  Price : number;
  ExpiryDate : Date;
  DiscountAmount: DiscountAmount;

}