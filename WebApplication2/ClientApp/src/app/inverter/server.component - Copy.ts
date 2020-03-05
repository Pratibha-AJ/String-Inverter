import { Component } from '@angular/core';

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [`.arrcolor {
                color: white
                }`]


})

export class ServerComponent {

  strtext: string = "";


  incrementClick() {
    console.log(this.strtext.length);
        
    var rev = [];


    var t = this.strtext.split(" ");
    //console.log(t);
    
    t.forEach(element => {

      var a = element.split("");
     
      var try1 = "";
      var ellength = element.length - 1;

      
      var g = new Array(element.length)
     
      console.log("Element" + element);
      var verlen = 0;
      while (ellength >= 0) {
        
        //  var ellength = element.length;
        //console.log("Before ellength" + ellength);
        //console.log("Before verlen" + verlen);

        //try1 = try1 + element[ellength];
        

        if ((element[ellength].charCodeAt(0) >= 65 && element[ellength].charCodeAt(0) <= 90) || (element[ellength].charCodeAt(0) >= 97 && element[ellength].charCodeAt(0) <= 122)) {
         // try1 = try1 + element[ellength];
          console.log(g[verlen]);
          if (g[verlen] == undefined)
            g[verlen] = element[ellength];
          else {
            verlen = verlen + 1;
            g[verlen] = element[ellength];
            

          }
          //console.log(g);
          verlen = verlen + 1;
         }
        else {
          console.log("in else" + ellength  + element[ellength])
          //try1[ellength] = element[ellength];
          g[ellength] = element[ellength];
          //console.log("elsetry");
          //console.log(  g);           
        }
        ellength = ellength - 1;
        
      }; 
      if (rev.length != 0) {
        rev.push(" ");
      }
      console.log("Final" );
      console.log(g);
      rev.push(g.join(""));
   
    

    })

    console.log(rev.join(""));
    console.log(rev.join("").length);
      }

////  incrementClick() {
////    console.log(this.strtext.length);


////    //console.log(this.strtext);
////    //console.log(this.strtext);
////    //console.log()
////    //console.log(this.strtext.length);
////    //console.log(this.strtext.split(" "));
////    var rev = [];


////    var t = this.strtext.split(" ");
////    console.log(t);
////    //console.log(t.reverse());
////    t.forEach(element => {

////      var a = element.split("");
////      //console.log(element.length);
////      //for (var i = element.length; i > element.length; i--) {
////      //  rev += element[i];
////      //  console.log(rev);
////      //}
////      //rev = rev + "";
////      var try1 = "";
////      var ellength = element.length;

////      console.log("Element" + element);
////      while (element.length - 1 > 0) {
////        //  var ellength = element.length;

////        try1 = try1 + element[ellength];
////      }

////      console.log(try1);

////    }
////      //var b = a;
////      //console.log(b.length);
////      //console.log(a[4 - 1]);
////      //var j = 0;
////      //for (var i = a.length-1 ; i > 0; i--) {      

////      //  console.log("I m I" + i);
////      // // console.log("In for b " + b[j]);
////      //  console.log("In for a " + a[i]);
////      //  console.log("only  a " + a);
////      //   if ((a[i].charCodeAt(0) >= 65 && a[i].charCodeAt(0) <= 90) || (a[i].charCodeAt(0) >= 97 && a[i].charCodeAt(0) <= 122)) {
////      //   //  console.log("b of j" + b[j]);

////      //     //var ar = a[i].charCodeAt(0);
////      //     //b[j] = ar.valueOf();
////      //     //console.log("After b of j" + b[j]);
////      //     j = j + 1;

////      //   }
////      //   else {
////      //     b[i] = a[i];
////      //     j = j + 1;
////      //  }
////      //  //console.log(" i am b" + b);
////      //}

////      ////console.log( " i am b" +b);

////      //a.forEach(i => {
////      //  var fel = ""
////      //  if ((i.charCodeAt(0) >= 65 && i.charCodeAt(0) <= 90) || (i.charCodeAt(0) >= 97 && i.charCodeAt(0) <= 122))
////      //  {
////      //    fel  += fel;

////      //  }

////      //})

////      //  if (rev.length != 0) {
////      //    rev.push(" ");
////      //  }

////      //  rev.push(a.reverse().join(''));

////      //}

////      //);
////      //console.log(rev);

////      //this.strtext = rev.join('');
////      //console.log(this.strtext);

////      //console.log(this.strtext.length);

////      // rev.toString
   
  
////}

}
