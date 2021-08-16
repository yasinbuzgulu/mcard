import { DataStorage } from './DataStorage';
import { TableManager } from './TableManager';
import { DiscountAmount } from './typeScriptFiles/enum/types';

export class ListManager {


  static createUserSelectList(myUser) {
    let selectList = document.createElement("select");
    selectList.id = "myUserSelect";
    selectList.innerHTML = `<option value="none" selected disabled hidden required> Lütfen Kullanıcı Seçiniz`;
    myUser.appendChild(selectList);

    for (let i = 0; i < DataStorage.applicants.length; i++) {
      let option = document.createElement("option");
      option.value = DataStorage.applicants[i].ApplicantID.toString();
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

   let selectListCity = document.createElement("select");
   selectListCity.id = "myCityOpportunitySelect";
   selectListCity.innerHTML = `<option value="none" selected disabled hidden required>Lütfen Şehir-Olanak Seçiniz`;
   selectListCity.onchange = function(evt){
    var value = evt.target.value;
    console.log(evt.target);
    ListManager.createCitySelectList(myCityOpportunity,value);
 };
   myCityOpportunity.appendChild(selectListCity);

 
    for (let i = 0; i < DataStorage.cities.length; i++) {
      let option = document.createElement("option");
      option.value = DataStorage.cities[i].CityName;
      option.text = DataStorage.cities[i].CityName ;
      selectListCity.appendChild(option);
    }
  }

  static createCitySelectList(myCitySelectBox,citiesName?) {
   const checkBoxList = document.getElementById("checkBoxList");
   checkBoxList.innerHTML = "";

     const myCityOpportunitySelect : HTMLInputElement  = document.getElementById("myCityOpportunitySelect") as HTMLInputElement;
     var selectedCitiesName = myCityOpportunitySelect.options[myCityOpportunitySelect.selectedIndex].value; 
     console.log(selectedCitiesName);
    const citiesList = DataStorage.cities.filter(item => item.CityName == citiesName);


    for (let i = 0; i < citiesList.length; i++) {
      //document.getElementById("checkBoxList").innerHTML = "";

      let selectListCity = document.createElement("input");
      selectListCity.type = "checkbox";
      selectListCity.id = "inputSelectOpportunity" + i.toString();
      selectListCity.name = "selectOpportunity";
      selectListCity.value = i.toString();

      var label = document.createElement('label');
      label.htmlFor = "inputSelectOpportunity" + i.toString();
      label.appendChild(document.createTextNode(citiesList[i].OpportunityName));

     
      checkBoxList.appendChild(selectListCity);
      checkBoxList.appendChild(label);

    }

  }

  static updateCityOpportunitySelectionList() {
    let myCityOpportunitySelectBox = document.getElementById("cityOpportunityField");
    myCityOpportunitySelectBox.innerHTML = '';
    ListManager.createCityOpportunitySelectList(myCityOpportunitySelectBox);
  }
  static updateCitySelectionList() {
    let myCityOpportunitySelectBox = document.getElementById("checkBoxList");
    myCityOpportunitySelectBox.innerHTML = '';
    ListManager.createCitySelectList(myCityOpportunitySelectBox);
  }


  static createUserList(userList) {
    let userTable = document.getElementById("userTableId");
    userTable.innerHTML = "";
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

      cell = document.createElement("td");
      cellText = document.createTextNode(userList[i].ApplicantSurname);
      cell.appendChild(cellText);
      row.appendChild(cell);

      cell = document.createElement("td");
      cellText = document.createTextNode(userList[i].ApplicantBirthDate);
      cell.appendChild(cellText);
      row.appendChild(cell);

      cell = document.createElement("td");
      cellText = document.createTextNode(userList[i].ApplicantID);
      cell.appendChild(cellText);

      row.appendChild(cell);
      cell = document.createElement("td");
      cellText = document.createTextNode(userList[i].ApplicantTypeBasedOnAge);
      cell.appendChild(cellText);

      row.appendChild(cell);
      cell = document.createElement("td");
      cellText = document.createTextNode(userList[i].ApplicantTypeBasedOnEducation);
      cell.appendChild(cellText);

      row.appendChild(cell);
      let cellButtonDelete = document.createElement("button");
      cell = document.createElement("td");
      cellButtonDelete.innerHTML = "Sil";

      cellButtonDelete.addEventListener("click", function () {
        let confirmDelete = confirm ("Kullanıcıyı silmek istediğinize emin misiniz? \n Dikkat, Bu işlem geri alınamaz!");
        if (confirmDelete) {
        DataStorage.applicants = DataStorage.applicants.filter (applicant => (applicant.ApplicantName+applicant.ApplicantID) != (userList[i].ApplicantName+userList[i].ApplicantID));
        ListManager.refreshUserTable();
        ListManager.updateUserSelectionList();
        }
        return;
      } 
      );

      cell.appendChild(cellButtonDelete);
      row.appendChild(cell);

      cell = document.createElement("td");
      let cellEditButton = document.createElement("button");
     // cellEditButton.setAttribute("href", "mainPage");
      cellEditButton.innerHTML = "Düzenle";
      cellEditButton.addEventListener("click", function() {
      window.location.href = '#applicantPage';
      TableManager.userEditTable(userList, i);
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
    element.innerHTML = "";
    element.parentNode.removeChild(element);
    ListManager.createUserList(DataStorage.applicants);
  }
  static createCityOpportunityList(cityOpportunityList) {
    let cityOpportunityTable = document.getElementById("cityOpportunityTableId");
    cityOpportunityTable.innerHTML = '';
    let table = document.createElement("table");
    let t1body = document.createElement("tbody");
    table.id = "cityOpportunityTableReferedId";
    table.innerHTML = `<thead>
                              <tr>
                              <th>Şehir İsmi</th>
                              <th>Olanak İsmi</th>
                              <th>1 Yıl için Ücreti</th>
                              <th>Tanımlanabileceği Max. Yıl</th>
                              <th>Sil</th>
                              <th>Düzenle</th>
                              </tr>
				    			    </thead>`;
                      cityOpportunityTable.appendChild(table);
    for(let i = 0; i<cityOpportunityList.length; i++) {
      let row = document.createElement("tr");
      let cell = document.createElement("td");
      let cellText = document.createTextNode(cityOpportunityList[i].CityName);
      cell.appendChild(cellText);
      row.appendChild(cell);

      cell = document.createElement("td");
      cellText = document.createTextNode(cityOpportunityList[i].OpportunityName);
      cell.appendChild(cellText);
      row.appendChild(cell);

      cell = document.createElement("td");
      cellText = document.createTextNode(cityOpportunityList[i].PerYearPrice);
      cell.appendChild(cellText);
      row.appendChild(cell);

      cell = document.createElement("td");
      cellText = document.createTextNode(cityOpportunityList[i].TopLimitYearValue);
      cell.appendChild(cellText);

      row.appendChild(cell);
      let cellButtonDelete = document.createElement("button");
      cell = document.createElement("td");
      cellButtonDelete.innerHTML = "Sil";

      cellButtonDelete.addEventListener("click", function () {
        let confirmDelete = confirm ("Şehir - Olanak bilgisini silmek istediğinize emin misiniz? \n Dikkat, Bu işlem geri alınamaz!");
        if (confirmDelete) {
        DataStorage.cities = DataStorage.cities.filter (cityOpportunity => (cityOpportunity.CityName+cityOpportunity.OpportunityName) != (cityOpportunityList[i].CityName+cityOpportunityList[i].OpportunityName));
        ListManager.refreshCityOpportunityTable();
        ListManager.updateCityOpportunitySelectionList();
        ListManager.updateCitySelectionList();
        }
        return;

      } );

      cell.appendChild(cellButtonDelete);
      row.appendChild(cell);

      cell = document.createElement("td");
      let cellEditButton = document.createElement("button");
      cellEditButton.innerHTML = "Düzenle";
      cellEditButton.addEventListener("click", function() {
        window.location.href = '#cityPage';
        TableManager.cityEditTable(cityOpportunityList,i);
        return;
        
      });
      cell.appendChild(cellEditButton);
      row.appendChild(cell);
       t1body.appendChild(row);

     }
     table.appendChild(t1body);
     cityOpportunityTable.appendChild(table);

  }
  static refreshCityOpportunityTable() {
    let element = document.getElementById("cityOpportunityTableReferedId");
    element.innerHTML = "";
    element.parentNode.removeChild(element);
    ListManager.createCityOpportunityList(DataStorage.cities);
  }
  
  static removeLast() {
 // DataStorage.applicants.pop();
  DataStorage.applicants.splice(-1,1)
}
}