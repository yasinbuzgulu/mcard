import { DataStorage } from './DataStorage';
import { TableManager } from './TableManager';
import { DiscountAmount } from './typeScriptFiles/enum/types';

export class ListManager {


  static createUserSelectList(myUser) {
    let selectList = document.createElement("select");
    selectList.id = "myUserSelect";
    selectList.innerHTML = `<option value="none" selected disabled hidden required> 
          Lütfen Kullanıcı Seçiniz`;
          myUser.appendChild(selectList);

    for (let i = 0; i < DataStorage.applicants.length; i++) {
      let option = document.createElement("option");
      option.value = i.toString();
      option.text = DataStorage.applicants[i].ApplicantName +" "+ DataStorage.applicants[i].ApplicantID;
      selectList.appendChild(option);
    }
  }
  static updateUserSelectionList() {
    let myUserSelectBox = document.getElementById("userField");
    myUserSelectBox.innerHTML = '';
    ListManager.createUserSelectList(myUserSelectBox);
  }

  static createCityOpportunitySelectList(myCityOpportunity) {
    let selectList = document.createElement("select");
    selectList.id = "myCityOpportunitySelect";
    selectList.innerHTML = `<option value="none" selected disabled hidden required> 
          Lütfen Şehir - Olanak Seçiniz`;
          myCityOpportunity.appendChild(selectList);

    for (let i = 0; i < DataStorage.cities.length; i++) {
      let option = document.createElement("option");
      option.value = i.toString();
      option.text = DataStorage.cities[i].CityName +" "+ DataStorage.cities[i].OpportunityName;
      selectList.appendChild(option);
    }
  }

  static updateCityOpportunityList() {
    let myCityOpportunitySelectBox = document.getElementById("cityOpportunityField");
    myCityOpportunitySelectBox.innerHTML = '';
    ListManager.createCityOpportunitySelectList(myCityOpportunitySelectBox);
  }

  static createUserList(userList) {

    let userTable = document.getElementById("userTableId");
    
    let table = document.createElement("table");
    let t1body = document.createElement("tbody");
    table.id = "userTableReferedId";
    table.innerHTML = `<thead>
                              <tr>
                              <th>İsim</th>
                              <th>Soyisim</th>
                              <th>Doğum Tarihi</th>
                              <th>Kimlik Numarası</th>
                              <th>Yaşa Göre Tip</th>
                              <th>Eğitime Göre Tip</th>
                              <th>Sil</th>
                              <th>Düzenle</th>
                              </tr>
				    			    </thead>`;
    userTable.appendChild(table);
    for(let i = 0; i<userList.length; i++) {
      let row = document.createElement("tr");
      let cell = document.createElement("td");
      let cellText = document.createTextNode(userList[i].ApplicantName);
      cell.appendChild(cellText);
      row.appendChild(cell);


      let cell_1 = document.createElement("td");
      let cellText_1 = document.createTextNode(userList[i].ApplicantSurname);
      cell_1.appendChild(cellText_1);
      row.appendChild(cell_1);

      let cell_2 = document.createElement("td");
      let cellText_2 = document.createTextNode(userList[i].ApplicantBirthDate);
      cell_2.appendChild(cellText_2);
      row.appendChild(cell_2);

      let cell_3 = document.createElement("td");
      let cellText_3 = document.createTextNode(userList[i].ApplicantID);
      cell_3.appendChild(cellText_3);
      row.appendChild(cell_3);

      let cell_4 = document.createElement("td");
      let cellText_4 = document.createTextNode(userList[i].ApplicantTypeBasedOnAge);
      cell_4.appendChild(cellText_4);
      row.appendChild(cell_4);

      let cell_5 = document.createElement("td");
      cellText = document.createTextNode(userList[i].ApplicantTypeBasedOnEducation);
      cell.appendChild(cellText);
      row.appendChild(cell);

      let cellButtonDelete = document.createElement("button");
      cell = document.createElement("td");
      cellButtonDelete.innerHTML = "Sil";

      cellButtonDelete.addEventListener("click", function () {
        let confirmDelete = confirm ("Kullanıcıyı silmek istediğinize emin misiniz? \n Dikkat, Bu işlem geri alınamaz!");
        if (confirmDelete) {DataStorage.applicants = DataStorage.applicants.filter (applicant => applicant.ApplicantName != userList[i].ApplicantName);
        ListManager.refreshUserTable();
        }
        return;

      } );

      cell.appendChild(cellButtonDelete);
      row.appendChild(cell);

      cell = document.createElement("td");
      let cellEditButton = document.createElement("button");
      cellEditButton.innerHTML = "Düzenle";
      cellEditButton.addEventListener("click", function() {
       // TableManager.userEditTable(userList[i]);
        return;
        
      });
      
      cell.appendChild(cellEditButton);
      row.appendChild(cell);
       t1body.appendChild(row);

     }
     table.appendChild(t1body);
     userTable.appendChild(table);

  }

  static refreshUserTable() {
    let element = document.getElementById("userTableReferedId");
    element.parentNode.removeChild(element);
    ListManager.createUserList(DataStorage.applicants);
  }

static removeLast() {
 // DataStorage.applicants.pop();
  DataStorage.applicants.splice(-1,1)
}
}