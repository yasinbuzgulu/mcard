import { Applicant } from './Applicant';
import { ApplicantManager } from './ApplicantManager';
import { City } from './City';
import { DataStorage } from './DataStorage';
// Import stylesheets
import './style.css';

let count = 0;

let cityList = DataStorage.createCityList();
let applicantList = DataStorage.createApplicantlist();

const saveNewUser: HTMLElement = document.getElementById("newUserSavingButton");
saveNewUser.onclick = function() {
ApplicantManager.createApplicantObject();

};



