import { DataStorage } from './DataStorage';
import { DiscountAmount } from './typeScriptFiles/enum/types';

export class CardManager {

  static createCardObject() {
    let cardIdendity = Math.floor(Math.random() * 10000000000000000);
    console.log(cardIdendity)
    let cardPrice = <HTMLInputElement> document.getElementById("cardPriceAttach");
    let today = new Date().toLocaleDateString()

    const userSelector :HTMLElement = document.getElementById("myUserSelect");
    var selectedUserID = userSelector.options[userSelector.selectedIndex].value;

    const result = DataStorage.applicants.filter(item => item.ApplicantID == selectedUserID);

    console.log(result);

  }
};

