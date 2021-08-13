import { ApplicantType, CitizenType } from './typeScriptFiles/enum/types';
import { IApplicant } from './typeScriptFiles/interface/IApplicant';
import { ICard } from './typeScriptFiles/interface/ICard';
import { ICity } from './typeScriptFiles/interface/ICity';


export class DataStorage {
  /**
   * Programa kayıt olunan tüm verilerin tutulduğu sınıf
   */
static cities:  Array<ICity> = new Array();
static applicants: Array<IApplicant> = new Array();
static cards: Array<ICard> = new Array();
static onlyApplicant = new Array();


/**
 * Programda kullanılacak 
 */
static listApplicants() {
  alert("This is an alert message box. " + this.applicants[0]);  // display string message
}

static listCities() {

}

static listCards() {

}

static createCityList() {
  this.cities.push(
      {
        CityName: "İstanbul",
        OpportunityName: "Otopark",
        PerYearPrice: 225,
        TopLimitYearValue: 1
      },
      {
        CityName: "İstanbul",
        OpportunityName: "Kütüphane",
        PerYearPrice: 400,
        TopLimitYearValue: 3
      },
      {
        CityName: "İstanbul",
        OpportunityName: "Tiyatro",
        PerYearPrice: 400,
        TopLimitYearValue: 3
      },
      {
        CityName: "Ankara",
        OpportunityName: "Kütüphane",
        PerYearPrice: 300,
        TopLimitYearValue: 4
      },  {
        CityName: "Bursa",
        OpportunityName: "Kütüphane",
        PerYearPrice: 250,
        TopLimitYearValue: 5
      },  {
        CityName: "Adana",
        OpportunityName: "Kütüphane",
        PerYearPrice: 200,
        TopLimitYearValue: 5
      },  {
        CityName: "İzmir",
        OpportunityName: "Kütüphane",
        PerYearPrice: 300,
        TopLimitYearValue: 4
      });

    return this.cities;
  }

  

  static createApplicantlist() {
    this.applicants.push(
      {
        ApplicantName :"Yasin",
        ApplicantSurname: "Büzgülü",
        ApplicantBirthDate: new Date (1478708162000),
        ApplicantID: 53452312702,
        ApplicantTypeBasedOnAge: "Normal",
        ApplicantTypeBasedOnEducation:  "Öğrenci"
      });
      return this.applicants;
  }

  
}



