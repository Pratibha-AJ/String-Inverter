import { Component } from '@angular/core';


@Component({
  selector: "app-inverter",
  templateUrl: "./inverter.component.html",
  styles: []
   })

export class InverterComponent {

  strtext: string = "";
  revstr: string = "";

  reverseStringClick() {

    console.log(this.strtext.length);
    var finalstr = [];

    var t = this.strtext.split(" ");


    t.forEach(element => {
      var a = element.split("");
      var ellength = element.length - 1;
      
      var reverseelement = new Array(element.length)

      console.log("Element" + element);
      var verlen = 0;
      while (ellength >= 0) {

        if ((element[ellength].charCodeAt(0) >= 65 && element[ellength].charCodeAt(0) <= 90) || (element[ellength].charCodeAt(0) >= 97 && element[ellength].charCodeAt(0) <= 122)) {

          if (reverseelement[verlen] == undefined)
            reverseelement[verlen] = element[ellength];
          else {
            verlen = verlen + 1;
            reverseelement[verlen] = element[ellength];
          }

          verlen = verlen + 1;
        }
        else {
          reverseelement[ellength] = element[ellength];
        }
        ellength = ellength - 1;

      };
      if (finalstr.length != 0) {
        finalstr.push(" ");
      }
      finalstr.push(reverseelement.join(""));

    })
    console.log(finalstr.join(""));
    console.log(finalstr.join("").length);
    this.revstr = finalstr.join("");
  }
}
