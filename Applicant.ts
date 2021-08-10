
import { City } from "./City";
import { ApplicantType, CitizenType } from "./typeScriptFiles/enum/types";
/**
 * Program başvuran kişinin bilgilerinin saklandığı sınıf
 */

import { IApplicant } from "./typeScriptFiles/interface/IApplicant";


export class Applicant implements IApplicant {

  private _applicantName: string;
  private _applicantSurname: string;
  private _applicantBirthDate: Date;
  private _applicantID: number;
  private _typeOfApplicantBasedOnAge: CitizenType;
  private _typeOfApplicantBasedOnEducation: ApplicantType;

  constructor(applicantName: string, applicantSurname: string,
     applicantBirthDate: Date, _applicantID: number,
     typeOfApplicantBasedOnAge: CitizenType,
     typeOfApplicantBasedOnEducation: ApplicantType) {
 
        this._applicantName = applicantName;
        this._applicantSurname = applicantSurname;
        this._applicantBirthDate = applicantBirthDate;
        this._applicantID = _applicantID;
        this._typeOfApplicantBasedOnAge = typeOfApplicantBasedOnAge;
        this._typeOfApplicantBasedOnEducation = typeOfApplicantBasedOnEducation;
  }

    get ApplicantName() {
      return this._applicantName;
    }
    set ApplicantName(applicantName : string){
      this._applicantName = applicantName;
    }

    get ApplicantSurname() {
      return this._applicantSurname;
    }
    set ApplicantSurname(applicantSurname : string){
      this._applicantSurname = applicantSurname;
    }
  
    get ApplicantBirthDate() {
      return this._applicantBirthDate;
    }
    set ApplicantBirthDate(applicantBirthDate : Date){
      this._applicantBirthDate = applicantBirthDate;
    }

    get ApplicantID() {
      return this._applicantID;
    }
    set ApplicantID(applicantID : number){
      this._applicantID = applicantID;
    }

    get ApplicantTypeBasedOnAge() {
      return this._typeOfApplicantBasedOnAge;
    }
    set ApplicantTypeBasedOnAge(applicantTypeBasedOnAge : CitizenType){
      this._typeOfApplicantBasedOnAge = applicantTypeBasedOnAge;
    }

    get ApplicantTypeBasedOnEducation() {
      return this._typeOfApplicantBasedOnEducation;
    }
    set ApplicantTypeBasedOnEducation(applicantTypeBasedOnEducation : number){
      this._typeOfApplicantBasedOnEducation = applicantTypeBasedOnEducation;
    }
    
}

