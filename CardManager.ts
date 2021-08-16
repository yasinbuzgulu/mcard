import { Card } from './Card';
import { DataStorage } from './DataStorage';
import { DiscountAmount } from './typeScriptFiles/enum/types';

export class CardManager {

  static createCardObject() {
    let cardIdendity = Math.floor(Math.random() * 10000000000000000);
    let cardPrice = <HTMLInputElement> document.getElementById("cardPriceAttach");

    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    let c = new Date(year + 4, month, day);
    let expiryDate = (c.toDateString());
    
   // let applicant : Array <string | string | number>;
    const userSelector :HTMLElement = document.getElementById("myUserSelect");
    let selectedUserID = userSelector.options[userSelector.selectedIndex].value;
    let resultUser = DataStorage.applicants.filter(item => item.ApplicantID == selectedUserID);

    const citySelector :HTMLElement = document.getElementById("myCityOpportunitySelect");
    let selectedCityName = citySelector.options[citySelector.selectedIndex].value;
    let resultCity = DataStorage.cities.filter(item => item.CityName == selectedCityName);

    let myApplicant = resultUser[0].ApplicantName + resultUser[0].ApplicantSurname + resultUser[0].ApplicantID ;
    let myCityOpportunity = resultCity[0].CityName;

    const opportunitySelector : HTMLElement = document.getElementById("checkBoxList");
    


    // let newCard = Card (Number(cardIdendity.)
    /*
    let element = <any> document.getElementsByName("inputSelectOpportunity0");  
    if (element.checked) {  }

    let element = <any> document.getElementsByName("inputSelectOpportunity1");  
    if (element.checked) {  }
    let element = <any> document.getElementsByName("inputSelectOpportunity2");  
    if (element.checked) {  }
    */
  }


}

