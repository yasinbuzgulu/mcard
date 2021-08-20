import { DataStorage } from "./DataStorage";
import { ListManager } from "./ListManager";


export class Verifications {

  static checkText(text) {
  }

  static checkID(idNumber) {
    let helper = 0;
      for(let i = 0; i<DataStorage.applicants.length; i++) {
        if(idNumber.value == DataStorage.applicants[i].ApplicantID){
          let confirmDelete = confirm ("Girelen Id'ye (" + idNumber.value+ ") sahip kayıtlı bir kullanıcı var.\n Üzerine yazmak istediğinize emin misiniz? \n Dikkat, Bu işlem geri alınamaz!");
          if (confirmDelete) {
          let b = DataStorage.applicants.filter(function (e) {
            return e.value === idNumber.value;
        });
          DataStorage.applicants.splice(DataStorage.applicants.findIndex(e => e.value === idNumber.value),1);
          return true;
        }else {helper =1; return false;}
      }
    }
    if(helper==0) {return true;}
    else {return false;}
  }

  static checkDate(inputDate) {
    let today = new Date().toLocaleDateString()
    var d1 = Date.parse(today);
    var d2 = Date.parse(inputDate);
    if (d1 < d2) {
    alert ("Error!");
}
  }

  static checkCityOpportunity(city,opportunity) {
    let helper = 0;
    let cityLast = city.value.toUpperCase();
    let opportunityLast = opportunity.value.toUpperCase();
      for(let i = 0; i<DataStorage.cities.length; i++) {
        if(cityLast == DataStorage.cities[i].CityName){
          let confirmDelete = confirm ("Girelen Id'ye (" + cityLast + opportunityLast+ ") sahip kayıtlı bir kullanıcı var.\n Üzerine yazmak istediğinize emin misiniz? \n Dikkat, Bu işlem geri alınamaz!");
          if (confirmDelete) {
            DataStorage.cities = DataStorage.cities.filter (cityOpportunity => (cityOpportunity.CityName+cityOpportunity.OpportunityName) != (DataStorage.cities[i].CityName+DataStorage.cities[i].OpportunityName));
          return true;
        }else {helper =1; return false;}
      }
    }
    if(helper==0) {return true;}
    else {return false;}
  }



}