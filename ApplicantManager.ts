import { Applicant } from "./Applicant";
import { DataStorage } from "./DataStorage";
import { ListManager } from "./ListManager";
import { TableManager } from "./TableManager";
import { ApplicantType, CitizenType } from "./typeScriptFiles/enum/types";
import { Verifications } from "./Verifications";

export class ApplicantManager {

  static createApplicantObject () {
    let applicantName =<HTMLInputElement>document.getElementById("applicantNameAttach");
    let applicantSurname =<HTMLInputElement>document.getElementById("applicantSurnameAttach");
    let applicantBirthDate =<HTMLInputElement>document.getElementById("applicantBirthDateAttach");
    Verifications.checkDate(applicantBirthDate);
    let applicantID =<HTMLInputElement>document.getElementById("applicantIDAttach");
    //Verifications.checkID(applicantID);

    const  selectedTypeOfApplicantBasedOnAgeInput = <HTMLInputElement>(document.getElementById("citizenTypeSelection"));
    let typeOfApplicantBasedOnAge;
    switch (Number(selectedTypeOfApplicantBasedOnAgeInput.value)) {
      case 0 : {   typeOfApplicantBasedOnAge = "Çocuk"; break;  }
      case 2 : {   typeOfApplicantBasedOnAge = "Yaşlı"; break;  }
      case 1 : {   typeOfApplicantBasedOnAge = "Normal"; break;  }
    }
      
    const selectedTypeOfApplicantBasedOnEducationInput = <HTMLInputElement> (document.getElementById("applicatTypeSelection"));
    let typeOfApplicantBasedOnEducation;
    switch(selectedTypeOfApplicantBasedOnEducationInput.value) {
      case "0": { typeOfApplicantBasedOnEducation = "Öğrenci";  break; }
      case "1": { typeOfApplicantBasedOnEducation = "Sivil";  break; }
      case "2": {  typeOfApplicantBasedOnEducation = "--";  }
    }

    let newApplicant = new Applicant(applicantName.value, applicantSurname.value,applicantBirthDate.value, Number(applicantID.value), typeOfApplicantBasedOnAge, typeOfApplicantBasedOnEducation);

    DataStorage.applicants.push(newApplicant);
    ListManager.updateUserSelectionList();
  
  }



}
