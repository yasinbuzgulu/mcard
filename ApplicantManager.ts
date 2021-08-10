import { Applicant } from "./Applicant";
import { DataStorage } from "./DataStorage";
import { ApplicantType, CitizenType } from "./typeScriptFiles/enum/types";

export class ApplicantManager {

  static createApplicantObject () {
    let applicantName =<HTMLInputElement>document.getElementById("applicantNameAttach");
    let applicantSurname =<HTMLInputElement>document.getElementById("applicantSurnameAttach");
    let applicantBirthDate =<HTMLInputElement>document.getElementById("applicantBirthDateAttach");
    let applicantID =<HTMLInputElement>document.getElementById("applicantIDAttach");
    

    const  selectedTypeOfApplicantBasedOnAgeInput = <HTMLInputElement>(document.getElementById("citizenTypeSelection"));
    let typeOfApplicantBasedOnAge: CitizenType;
    switch (selectedTypeOfApplicantBasedOnAgeInput.value) {
      case "KID" : {  typeOfApplicantBasedOnAge = CitizenType.KID; break;  }
      case "ELDER" : {  typeOfApplicantBasedOnAge = CitizenType.ELDER; break;  }
      default:   {  typeOfApplicantBasedOnAge = CitizenType.NORMAL;   }
    }
      
    const selectedTypeOfApplicantBasedOnEducationInput = <HTMLInputElement> (document.getElementById("applicatTypeSelection"));
    let typeOfApplicantBasedOnEducation: ApplicantType;
    switch(selectedTypeOfApplicantBasedOnEducationInput.value) {
      case "STUDENT": { typeOfApplicantBasedOnEducation = ApplicantType.STUDENT;  break; }
      case "CIVIL": { typeOfApplicantBasedOnEducation = ApplicantType.CIVIL;  break; }
      default: {  typeOfApplicantBasedOnEducation = ApplicantType.NONE;  }
    }

    let newApplicant = new Applicant(applicantName.value, applicantSurname.value, new Date(applicantBirthDate.value), Number(applicantID.value), typeOfApplicantBasedOnAge, typeOfApplicantBasedOnEducation);

    DataStorage.applicants.push(newApplicant);
    DataStorage.onlyApplicant.push(applicantID.value);
    
  
  
  
  }



}

