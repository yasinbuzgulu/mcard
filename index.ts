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

let state = 0;
const userTableSection: HTMLElement = document.getElementById("userListSection");
userTableSection.style.display = "none";

const cityOpportunityListSection: HTMLElement = document.getElementById("cityOpportunityListSection");
cityOpportunityListSection.style.display = "none";

const cardListSection: HTMLElement = document.getElementById("cardListSection");
cardListSection.style.display = "none";


let cityList = DataStorage.createCityList();
let applicantList = DataStorage.createApplicantlist();

const saveNewUser: HTMLElement = document.getElementById("newUserSavingButton");
saveNewUser.onclick = function() {
    ApplicantManager.createApplicantObject();
    
};

const listUsers: HTMLElement = document.getElementById("listUserButton");
listUsers.onclick = function() {
  let myUserTableList = document.getElementById("userListSection");
 
  userTableSection.style.display = "inline";
  cityOpportunityListSection.style.display = "none";
  cardListSection.style.display = "none";
  ListManager.createUserList(DataStorage.applicants);
}

const saveNewCityOpportunity: HTMLElement = document.getElementById("newCityAndOpportunitySavingButton");
    saveNewCityOpportunity.onclick = function() {
    CityManager.createCityObject();
}

const listCitiesOpportunities: HTMLElement = document.getElementById("listCityOpportunityButton");
listCitiesOpportunities.onclick = function() {
  let myCityOpportunityTableList = document.getElementById("cityOpportunityListSection");
 
  userTableSection.style.display = "none";
  cityOpportunityListSection.style.display = "inline";
  cardListSection.style.display = "none";
  ListManager.createCityOpportunityList(DataStorage.cities);
}

const saveNewCard: HTMLElement = document.getElementById("newCardSavingButton");
saveNewCard.onclick = function() {
    CardManager.createCardObject();
}

let myUserSelectBox = document.getElementById("userField");
ListManager.createUserSelectList(myUserSelectBox);  

let myCityOpportunitySelectBox = document.getElementById("cityOpportunityField");
ListManager.createCityOpportunitySelectList(myCityOpportunitySelectBox);  


