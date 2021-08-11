import { DiscountAmount } from "../../typeScriptFiles/enum/types";

export interface ICard {
  
  CardIdentitty : number;
  CardPrice : number;
  CardExpiryDate : Date;
  CardDiscountAmount: DiscountAmount;
  
}