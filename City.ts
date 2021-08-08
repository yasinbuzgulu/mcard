import {ICity} from "./interface/ICity";
/**
 * Programdaki şehir isimlerinin tutulduğu sınıf
 */
export class City implements ICity {
  private _cityName : string;

  constructor(cityName : string) {
       this._cityName = cityName;
     }

     get CityName() {
       return this._cityName;
     }
     set CityName(cityName) {
       this._cityName = cityName;
     }

}