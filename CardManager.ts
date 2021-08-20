import { Applicant } from './Applicant';
import { Card } from './Card';
import { DataStorage } from './DataStorage';
import { DiscountAmount } from './typeScriptFiles/enum/types';
/**
 * Kart bilgilerinin derlenip yeni kart nesnelerinin oluşturulduğu sınıf
 */
export class CardManager {

  static createCardObject() {
    let cardIdendity = Math.floor(Math.random() * 100000000);
    let cardPrice = <HTMLInputElement> document.getElementById("cardPriceAttach");

    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    let c = new Date(year + 4, month, day);
    let expiryDate = (c.toDateString());
    
    const userSelector :HTMLElement = document.getElementById("myUserSelect");
    let selectedUserID = userSelector.options[userSelector.selectedIndex].value;
    const resultUser = DataStorage.applicants.filter(item => item.ApplicantID == selectedUserID);

    const citySelector :HTMLElement = document.getElementById("myCityOpportunitySelect");
    let selectedCityName = citySelector.options[citySelector.selectedIndex].value;
    let resultCity = DataStorage.cities.filter(item => item.CityName == selectedCityName);
   
    let checkedUser : any = [];
    for(let i =0; i<resultUser.length; i++){
      checkedUser.push(resultUser[i].ApplicantName.toUpperCase() +" " + resultUser[i].ApplicantSurname.toUpperCase() + " " + resultUser[i].ApplicantID +" ");
      var typeCitizen = resultUser[i].ApplicantTypeBasedOnAge;
      var typeApplicant = resultUser[i].ApplicantTypeBasedOnEducation;
    }

    let checkedCity : any = [];
    for(let i =0; i<resultCity.length; i++){
      //console.log(resultCity[i].CityName);
      checkedCity.push(resultCity[i].CityName.toUpperCase());
      var feeOpportunity = resultCity[i].PerYearPrice;
      var feeYear = resultCity[i].TopLimitYearValue;
    }

    const opportunitySelector : HTMLElement = document.getElementById("checkBoxList");
    let element = <HTMLInputElement> document.getElementById("checkBoxList");  
    if (element.checked) {  }

    var inputElems = document.getElementsByTagName("input");
    let checkedOpportunity: any =[]; 
    for (var i=0; i<inputElems.length; i++) {       
       if (inputElems[i].type == "checkbox" && inputElems[i].checked == true){

         checkedOpportunity.push( inputElems[i].value );
        }
    }

    console.log(checkedOpportunity+"dfghjk");
    let totalPrice = feeOpportunity * feeYear;
    
    let newCard = new Card (Number(cardIdendity), Number(cardPrice.value), expiryDate, checkedUser,checkedCity , checkedOpportunity ); 
    DataStorage.cards.push(newCard);
    alert("Normal ücret ; \n" +" Kart Ücreti:" + Number(cardPrice.value) +" / Olanak Fiyatı"  + Number(totalPrice) +"\n Ödenecek tutar : " );

  }
}
