import { DataStorage } from "./DataStorage";
import { ListManager } from "./ListManager";
import { IApplicant } from "./typeScriptFiles/interface/IApplicant";


export class TableManager {

static userEditTable (userList, i) {
        let applicantNameEdit = <HTMLInputElement>(  document.getElementById("applicantNameAttach")  );
        applicantNameEdit.defaultValue = DataStorage.applicants[i].ApplicantName.toString();
        let applicantSurnameEdit = <HTMLInputElement>(  document.getElementById("applicantSurnameAttach")  );
        applicantSurnameEdit.defaultValue = DataStorage.applicants[i].ApplicantSurname.toString(); 
        let applicantSBirthDateEdit = <HTMLInputElement>(  document.getElementById("applicantBirthDateAttach")  );
        applicantSBirthDateEdit.value = DataStorage.applicants[i].ApplicantBirthDate.toDateString(); 
        let applicantIdEdit = <HTMLInputElement>(  document.getElementById("applicantIDAttach")  );
        applicantIdEdit.defaultValue = DataStorage.applicants[i].ApplicantID.toString(); 
        
        let applicantCitizenType = <HTMLInputElement>(  document.getElementById("citizenTypeSelection")  );
        applicantCitizenType.defaultValue = DataStorage.applicants[i].ApplicantTypeBasedOnAge.toString(); 

        applicantCitizenType.defaultValue = DataStorage.applicants[i].ApplicantTypeBasedOnAge.toString(); 
        let applicantApplicantType = <HTMLInputElement>(  document.getElementById("applicatTypeSelection")  );
        applicantApplicantType.defaultValue = DataStorage.applicants[i].ApplicantTypeBasedOnEducation.toString(); 

        DataStorage.applicants = DataStorage.applicants.filter (applicant => applicant.ApplicantName != userList[i].ApplicantName);
        ListManager.refreshUserTable();
}



}