import { ApplicantType, CitizenType } from "../../typeScriptFiles/enum/types";

/**
 * Başvuran kişi sınıfına erişmek için kullanılan interface
 */
export interface IApplicant {

  ApplicantName : string;
  ApplicantSurname : string;
  ApplicantBirthDate : Date;
  ApplicantID : number;
  ApplicantTypeBasedOnAge : CitizenType;
  ApplicantTypeBasedOnEducation : ApplicantType;

}