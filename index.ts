import { Applicant } from './Applicant';
import { ApplicantManager } from './ApplicantManager';
import { CardManager } from './CardManager';
import { City } from './City';
import { CityManager } from './CityManager';
import { DataStorage } from './DataStorage';
import { ListManager } from './ListManager';
// Import stylesheets
import './style.css';
import { TableManager } from './TableManager';
/**
 * Listeleri başlangıç halinde kapalı hale getiren kısım
 */
const userTableSection: HTMLElement = document.getElementById("userListSection");
userTableSection.style.display = "none";
const cityOpportunityListSection: HTMLElement = document.getElementById("cityOpportunityListSection");
cityOpportunityListSection.style.display = "none";
const cardListSection: HTMLElement = document.getElementById("cardListSection");
cardListSection.style.display = "none";
/**
 * Doğum taihini max olarak bugünün tarihine ayarlayan kısım
 */
document.getElementById('applicantBirthDateAttach').max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
/**
 * Default olarak kullanıcı ve şehir-olanakların eklendiği kısım
 */
let cityList = DataStorage.createCityList();
let applicantList = DataStorage.createApplicantlist();
/**
 * Yeni Kullancı kısmında kaydet butonuna tıklanınca karşılaşılacak senaryo
 */
const saveNewUser: HTMLElement = document.getElementById("newUserSavingButton");
const userForm : HTMLFormElement = document.getElementById("userForm") as HTMLFormElement;
saveNewUser.onclick = function() {    
  if(userForm.reportValidity()){
    ApplicantManager.createApplicantObject();
}
};
/**
 * * Yeni Kullancı kısmında listele butonuna tıklanınca karşılaşılacak senaryo
 */
const listUsers: HTMLElement = document.getElementById("listUserButton");
listUsers.onclick = function() { 
  let myUserTableList = document.getElementById("userListSection");
  userTableSection.style.display = "inline";
  cityOpportunityListSection.style.display = "none";
  cardListSection.style.display = "none";
  ListManager.createUserList(DataStorage.applicants);
  }
/**
 *  * Yeni Şehir-olanak kısmında kaydet butonuna tıklanınca karşılaşılacak senaryo
 */
const saveNewCityOpportunity: HTMLElement = document.getElementById("newCityAndOpportunitySavingButton");
const cityForm : HTMLFormElement = document.getElementById("cityForm") as HTMLFormElement;
saveNewCityOpportunity.onclick = function() { 
      if(cityForm.reportValidity()){
      CityManager.createCityObject();
      TableManager.resetCityPage();

      }
}
/**
 * Yeni Şehir-olanak kısmında listele butonuna tıklanınca karşılaşılacak senaryo
 */
const listCitiesOpportunities: HTMLElement = document.getElementById("listCityOpportunityButton");
listCitiesOpportunities.onclick = function() {
  let myCityOpportunityTableList = document.getElementById("cityOpportunityListSection");
  userTableSection.style.display = "none";
  cityOpportunityListSection.style.display = "inline";
  cardListSection.style.display = "none";
  ListManager.createCityOpportunityList(DataStorage.cities);
}
/**
 * Yeni Kart kısmında kaydet butonuna tıklanınca karşılaşılacak senaryo
 */
const saveNewCard: HTMLElement = document.getElementById("newCardSavingButton");
const cardForm : HTMLFormElement = document.getElementById("cardForm") as HTMLFormElement;
saveNewCard.onclick = function() {
    CardManager.createCardObject();
    TableManager.resetCardPage();
    alert("Kart başarılı bir şekilde listeye eklendi.");
}
/**
 * Yeni Kart kısmında listele butonuna tıklanınca karşılaşılacak senaryo
 */
const listCards: HTMLElement = document.getElementById("listCardButton");
listCards.onclick = function() {
  let myCityOpportunityTableList = document.getElementById("cardListSection");
  userTableSection.style.display = "none";
  cityOpportunityListSection.style.display = "none";
  cardListSection.style.display = "inline";
  ListManager.createCardList(DataStorage.cards);
}
/**
 * Kart kaydındaki Select box ların oluşturulduğu kısım  
 */
let myUserSelectBox = document.getElementById("userField");
ListManager.createUserSelectList(myUserSelectBox);  
let myCityOpportunitySelectBox = document.getElementById("cityOpportunityField");
ListManager.createCityOpportunitySelectList(myCityOpportunitySelectBox);  
let myCitySelectBox = document.getElementById("checkBoxList");
ListManager.createCitySelectList(myCitySelectBox,"İstanbul");  



export function validateID() { 
        let tcNumber = document.getElementById("applicantIDAttach");

        let myId = tcNumber;
        tcNumber = (tcNumber.value).toString();
        
        // T.C. identity number 11 haneli olmalı
        if (myId.value.length != 11)
        { alert("Kimlik numrasını " + myId.value.length+" hane girdiniz. \n Lütfen kimlik numaranızı 11 hane giriniz"); return false; }
        
        const digits = tcNumber.split('');
        // son 2 hane (10. and 11.) validasyon için tutulur
        const d10 = Number(digits[9]);
        const d11 = Number(digits[10]);

        // ilk 10 hane toplanır/ tek haneler toplanır / çift haneler toplanır
        let sumOf10 = 0;
        let evens = 0;
        let odds = 0;
        
        digits.forEach((digitNumber, index) => {
          digitNumber = Number(digitNumber);
            if (index < 10) sumOf10 += digitNumber;
            if (index < 9) {
                if ((index + 1) % 2 === 0) {
                    evens += digitNumber;
                } else {
                    odds += digitNumber;
                }
            }
        });
        
        // ilk 10 hane toplamının mod 10 nu 11. haneyi vermelidir.
        if (sumOf10 % 10 != d11) 
        {alert("Girilen kimlik numarası hatalıdır! \n Lütfen tekrar giriniz");
      return false; }
        
        // tek haneler tplamının 7 katından çift haneler çıkarılınca elde edilen değerin mod 10 nu 10. haneyi vermelidir
        if (((odds * 7) - (evens)) % 10 != d10)
        {alert("Girilen kimlik numarası hatalıdır! \n Lütfen tekrar giriniz");
        return false; }
        
        return true;
} 