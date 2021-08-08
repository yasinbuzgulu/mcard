import { City } from './City';
import {IOpportunity} from "./interface/IOpportunity";
/**
 * Programdaki olanakların isism, yıllık fiyatı, indirim mikatı
 */
export class Opportunity extends City implements IOpportunity {

  private _name: string;
  private _perYearPrice: number;
  private _topLimitYearValue: number;

  constructor(cityName:string, name: string, perYearPrice: number, topLimitYearValue: number){
      super(cityName);
      this._name = name;
      this._perYearPrice = perYearPrice;
      this._topLimitYearValue = topLimitYearValue;
  }

  get Name() {
    return this._name;
  }
  set Name(name) {
    this._name=name;
  }

  get PerYearPrice () {
    return this._perYearPrice;
  }
  set PerYearPrice (perYearPrice) {
    this._perYearPrice = perYearPrice;
  }

  get TopLimitYearValue () {
    return this._topLimitYearValue;
  }
  set TopLimitYearValue (topLimitYearValue) {
    this._topLimitYearValue = topLimitYearValue;
  }


}