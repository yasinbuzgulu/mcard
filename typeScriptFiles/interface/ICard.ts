import { Applicant } from "../../Applicant";
import { City } from "../../City";
import { DiscountAmount } from "../../typeScriptFiles/enum/types";
/**
 * Karta tanımlamak için Kartla ilgili bilgileri ifade eden arayüzümüz
 */
export interface ICard {
  
  CardIdentitty : number;
  CardPrice : number;
  CardExpiryDate : Date;
  User : string;
  City : string;
  Opportunity : string;
}