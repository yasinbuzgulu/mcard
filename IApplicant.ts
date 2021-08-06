import { UserType } from "./../enum/types";
/**
 * Kişi sınıfına erişmek için kullanılan interface
 */
export interface IUser {

  ApplicantName : string;
  ApplicantSurname : string;
  ApplicantID : number;
  ApplicantType : UserType;
  OrganizationOfUser : OrganizationName;

  

  

}