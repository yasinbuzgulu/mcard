import { DiscountAmount } from './typeScriptFiles/enum/types';

export class CardManager {

  static createCardObject() {
    const cardIdendity = <HTMLInputElement> document.getElementById("cardIdendityAttach");
    const cardPrice = <HTMLInputElement> document.getElementById("cardPriceAttach");
    const expiryDate = <HTMLInputElement> document.getElementById("expiryDateAttach");

    let selectedDiscountAmount: DiscountAmount;
    let selectedDiscountAmountRadioButton = <HTMLInputElement> document.getElementById("discountAmount-full");
    if(selectedDiscountAmountRadioButton.checked) selectedDiscountAmount = DiscountAmount.FULL;

    selectedDiscountAmountRadioButton = <HTMLInputElement> document.getElementById("discountAmount-percentage");
    if (selectedDiscountAmountRadioButton.checked) selectedDiscountAmount = DiscountAmount.PERCENTAGE;

    selectedDiscountAmountRadioButton = <HTMLInputElement> document.getElementById("discountAmount-none");
    if (selectedDiscountAmountRadioButton.checked) selectedDiscountAmount = DiscountAmount.NONE


  }
};

