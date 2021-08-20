import { DataStorage } from "./DataStorage";
import { ListManager } from "./ListManager";
import { IApplicant } from "./typeScriptFiles/interface/IApplicant";


export class TableManager {

static userEditTable (userList, i) {
        let applicantNameEdit = <HTMLInputElement>(  document.getElementById("applicantNameAttach")  );
        applicantNameEdit.defaultValue = DataStorage.applicants[i].ApplicantName.toString();
        let applicantSurnameEdit = <HTMLInputElement>(  document.getElementById("applicantSurnameAttach")  );
        applicantSurnameEdit.defaultValue = DataStorage.applicants[i].ApplicantSurname.toString(); 
     
        let applicantIdEdit = <HTMLInputElement>(  document.getElementById("applicantIDAttach")  );
        applicantIdEdit.defaultValue = DataStorage.applicants[i].ApplicantID.toString(); 

        document.getElementById('applicantBirthDateAttach').value = DataStorage.applicants[i].ApplicantBirthDate.substring(0, 10);

        switch(DataStorage.applicants[i].ApplicantTypeBasedOnAge) {
                case "Çocuk" : document.getElementById("citizenTypeSelection").value = '1';
                case 'Normal': document.getElementById("citizenTypeSelection").value = '2';
                case 'Yaşlı' : document.getElementById("citizenTypeSelection").value = '0';
        }
        switch(DataStorage.applicants[i].ApplicantTypeBasedOnEducation) {
                case "Öğrenci" : document.getElementById("applicatTypeSelection").value = '2';
                case 'Sivil': document.getElementById("applicatTypeSelection").value = '0';
                case 'ikiside değil' : document.getElementById("applicatTypeSelection").value = '1';
        }
        
        //applicantCitizenType.defaultValue = DataStorage.applicants[i].ApplicantTypeBasedOnAge.toString(); 
        // let applicantApplicantType = <HTMLInputElement>(  document.getElementById("applicatTypeSelection")  );
        // applicantApplicantType.defaultValue = DataStorage.applicants[i].ApplicantTypeBasedOnEducation.toString(); 

        DataStorage.applicants = DataStorage.applicants.filter (applicant => applicant.ApplicantName != userList[i].ApplicantName);
        ListManager.refreshUserTable();
}

static cityEditTable (cityList, i) {
        let cityNameEdit = <HTMLInputElement>(  document.getElementById("cityNameAttach")  );
        cityNameEdit.defaultValue = DataStorage.cities[i].CityName.toString();
        let opportunityNameEdit = <HTMLInputElement>(  document.getElementById("opportunityNameAttach")  );
        opportunityNameEdit.defaultValue = DataStorage.cities[i].OpportunityName.toString(); 
        let perYearPriceEdit = <HTMLInputElement>(  document.getElementById("perYearPriceAttatch")  );
        perYearPriceEdit.value = DataStorage.cities[i].PerYearPrice.toString(); 
        let topLimitYearValueEdit = <HTMLInputElement>(  document.getElementById("topLimitYearValueAttach")  );
        topLimitYearValueEdit.defaultValue = DataStorage.cities[i].TopLimitYearValue.toString(); 
        
        DataStorage.cities = DataStorage.cities.filter (cityOpportunity => (cityOpportunity.CityName+cityOpportunity.OpportunityName) != (cityList[i].CityName+cityList[i].OpportunityName));
        ListManager.refreshCityOpportunityTable();
}

static cardEditTable(cardList, i) {

}

static resetUserPage() {
                let applicantNameEdit = <HTMLInputElement>(  document.getElementById("applicantNameAttach")  );
                applicantNameEdit.defaultValue = "";
                let applicantSurnameEdit = <HTMLInputElement>(  document.getElementById("applicantSurnameAttach")  );
                applicantSurnameEdit.defaultValue = ""; 
                let applicantSBirthDateEdit = <HTMLInputElement>(  document.getElementById("applicantBirthDateAttach")  );
                applicantSBirthDateEdit.value =""; 
                let applicantIdEdit = <HTMLInputElement>(  document.getElementById("applicantIDAttach")  );
                applicantIdEdit.defaultValue = ""; 
               // document.getElementById("citizenTypeSelection").value = "Çocuk"
                /*
                let applicantApplicantType = <HTMLInputElement>(  document.getElementById("applicatTypeSelection")  );
                applicantApplicantType.defaultValue = ""; */
                document.getElementById('userForm').reset() as HTMLFormElement;

        }

static resetCityPage() {
                let cityNameEdit = <HTMLInputElement>(  document.getElementById("cityNameAttach")  );
                cityNameEdit.defaultValue = "";
                let opportunityNameEdit = <HTMLInputElement>(  document.getElementById("opportunityNameAttach")  );
                opportunityNameEdit.defaultValue = ""; 
                let perYearPriceEdit = <HTMLInputElement>(  document.getElementById("perYearPriceAttatch")  );
                perYearPriceEdit.value = ""; 
                let topLimitYearValueEdit = <HTMLInputElement>(  document.getElementById("topLimitYearValueAttach")  );
                topLimitYearValueEdit.defaultValue = ""; 
                document.getElementById('cityForm').reset() as HTMLFormElement;

                       }
static resetCardPage() {
                let cardPriceEdit = <HTMLInputElement> (document.getElementById("cardPriceAttach"));
                cardPriceEdit.defaultValue = '';
                let userSelectionEdit = <HTMLInputElement> (document.getElementById("myUserSelect"));
                userSelectionEdit.value="0";
                let citySelectionEdit = <HTMLInputElement> (document.getElementById("myCityOpportunitySelect"));
                citySelectionEdit.value="0";
                document.getElementById('cardForm').reset() as HTMLFormElement;

        }

}