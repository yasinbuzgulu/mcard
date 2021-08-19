import { Applicant } from "../../Applicant";
import { City } from "../../City";
import { DiscountAmount } from "../../typeScriptFiles/enum/types";

export interface ICard {
  
  CardIdentitty : number;
  CardPrice : number;
  CardExpiryDate : Date;
  User : string;
  City : string;
  Opportunity : string;
}