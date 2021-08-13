import { City } from './City';
import { DataStorage } from './DataStorage';
import { ListManager } from './ListManager';

export class CityManager {

  static createCityObject() {
    let cityName = <HTMLInputElement>(document.getElementById("cityNameAttach"));
    let opportunityName = <HTMLInputElement>(document.getElementById("opportunityNameAttach"));
    let perYearPrice = <HTMLInputElement>(document.getElementById("perYearPriceAttatch"));
    let topLimitYearValue = <HTMLInputElement>(document.getElementById("topLimitYearValueAttach"));

    let newCityAndOpportunity = new City(cityName.value, opportunityName.value, Number(perYearPrice.value), Number(topLimitYearValue.value));    
    DataStorage.cities.push(newCityAndOpportunity);
    ListManager.updateCityOpportunitySelectionList();

  }
}