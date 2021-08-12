import { Applicant } from './Applicant';
import { ApplicantManager } from './ApplicantManager';
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
    let myUserSelectBox = document.getElementById("applicantNameAttach");
};

const listUsers: HTMLElement = document.getElementById("listUserButton");
listUsers.onclick = function() {
  state = 3;
  userTableSection.style.display = "inline";
  cityOpportunityListSection.style.display = "none";
  cardListSection.style.display = "none";
  ListManager.createUserList(DataStorage.applicants);
}
const saveNewCityOpportunity: HTMLElement = document.getElementById("newCityAndOpportunitySavingButton");
    saveNewCityOpportunity.onclick = function() {
    CityManager.createCityObject();
    let myCitySelectBox = document.getElementById("cityNameAttach");
    myCitySelectBox.innerHTML = '';
}


let myUserSelectBox = document.getElementById("userField");
ListManager.createUserSelectList(myUserSelectBox);  

let myCityOpportunitySelectBox = document.getElementById("cityOpportunityField");
ListManager.createCityOpportunitySelectList(myCityOpportunitySelectBox);  


