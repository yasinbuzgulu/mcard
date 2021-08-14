import { ListManager } from "./ListManager";


export class Verifications {

  static checkText(text) {
    let onlyLetter = /^[a-zA-Z]+$/.test(text);
    if(onlyLetter== text) document.getElementById("applicantNameAttach").innerHTML ="&#9989;"
  }

  static checkID(value) {
    value = value.toString();
    var valueNum = /^\d+$/;
    if(value!=valueNum) {alert("Kimlik Numarasını Yanlış Girdiniz!(sadece sayı içermelidir)"); ListManager.removeLast(); }

    let lastDigit = value % 10;
    if(lastDigit==0){ alert("Kimlik Numarasını Yanlış Girdiniz!(tek sayı olamaz)"); }
    

    var totalX = 0;
    for (var i = 0; i < 10; i++) {
          totalX += Number(value.substr(i, 1));
        }
    //topladığımız sayıların 10'a bölümünden kalanının 11. haneye eşit olup olmadığını kontrol ediyoruz.
    if(totalX % 10 != value.substr(10,1)) alert("Kimlik Numarasını Yanlış Girdiniz!(validasyona uymalıdır -gerçek bir T.C no-)")

    //1, 3, 5, 7, ve 9. hanelerdeki sayıları toplayacağımız değişkeni ve 2, 4, 6, ve 8. hanelerdeki sayıların toplamını atayacağımız değişkeni tanımlıyoruz.
    var totalY1 = 0;
    var totalY2 = 0;
    //Tekil hanelerdeki sayıları toplayan for döngüsü:
    for (var i = 0; i < 10; i+=2) {
      totalY1 += Number(value.substr(i, 1));
        }
   //Çift hanelerdeki sayıları toplayan for döngüsü:
    for (var i = 1; i < 10; i+=2) {
          totalY2 += Number(value.substr(i, 1));
        }

        //çıkan sonucu 7 ile çarpıp, çift hanelerin toplamanı çıkartıp mod 10'nuna bakıyoruz. 10. hanedeki rakama eşit mi diye.
        //bütün kuralların uyup uymadığını geri döndürüyoruz
  if( ((totalY1 * 7) - totalY2) % 10 == value.substr(9,0)) alert("Kimlik Numarasını Yanlış Girdiniz!")

  }





}