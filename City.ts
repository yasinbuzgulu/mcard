import { ICity } from "./typeScriptFiles/interface/ICity";

/**
 * Programdaki şehir isimlerinin tutulduğu sınıf
 */
export class City implements ICity {
  private _cityOpportunityArrayId : number;
  private _cityName : string;
  private _opportunityName: string;
  private _perYearPrice: number;
  private _topLimitYearValue: number;

  constructor(cityName:string, opportunityName: string, perYearPrice: number, topLimitYearValue: number){
    this._cityName = cityName; 
    this._opportunityName = opportunityName;
    this._perYearPrice = perYearPrice;
    this._topLimitYearValue = topLimitYearValue;
}
 

     get CityName() {
       return this._cityName;
     }
     set CityName(cityName) {
       this._cityName = cityName;
     }

     get OpportunityName() {
      return this._opportunityName;
    }
    set OpportunityName(name) {
      this._opportunityName=name;
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