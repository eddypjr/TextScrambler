const $ = require("jquery")
  let letterObj = '迪æ비ΦミシュキーマイΦサウロжзклмнпрстфхцчщン茶シζ';
    // This give return only texts inside the body tags

  function scrambleWords(word) {
      let result           = '';
      let characters       = '迪æ비ΦミュキーマイΦサウàロжзкйлмнпрстфхцчщン茶シζ';
      let charactersLength = characters.length;
      for ( let i = 0; i < word.length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }

    let bodyText = document.getElementsByTagName('body')[0].innerHTML;
    bodyText = bodyText.replace(/<\/?[^>]+(>|$)/g, "");
    console.log(bodyText)

    //declare an array of words taken from DOM's body
    let words = bodyText.split('');

    let letters = /^[A-Za-z]+$/;
    words = words.map(el => {
    //   console.log(el)
      if (el.match(letters)) {
          // console.log(scrambleWords(el))
          return scrambleWords(el);
      } else {
          return el;
      }
    });
    
    words = words.join(''); 
    // console.log(words);
    document.body.textContent = words;
    console.log(document.body.textContent)

/*

*/

// let ourDoc = document.getElementsByTagName('*');
// console.log(ourDoc[8]);
// for (let i = 0, i < ourDoc.length; i++) {
    // console.log(ourDoc[0]);
// };
 

// returns all elements of DOM

// iterate over every element, replaceing its text with our scramble.
// for (var i = 0; i < element.length; i++;) { 
    //     element[i].innerHTML = (our function that scrambles); 
    // } 
    
    
    
    
    //random generation of characters, given integer 
    
    
    
    // console.log(document.getElementsByTagName('body')[0].innerHTML)
// let text = document.getElementsByTagName('body')[0].innerHTML;
// // console.log(text)
// text = text.replace(/<\/?[^>]+(>|$)/g, "");
// // console.log(text)
// let words = text.split('');
// // console.log(words)
// let letters = /^[A-Za-z]+$/;
// words = words.map(el => {
//     // console.log(el)
//     if (el.match(letters)) {
//         // console.log(scrambleWords(el))
//         return scrambleWords(el);
//     } else {
//         return el;
//     }
// })

// words = words.join('')
// console.log(words)


// import $ from "jquery";

// Get all the text from a given website  

// function myFunction() {
//     let body = document.body.children;
//     console.log(body);
//     let i;
//     for (i = 0; i < body.length; i++) {
//         console.log(body[i]);
//         body[i].style.backgroundColor = "red";
//     }
// }
// console.log(myFunction());

    
 
    // let bodyText = $("body").text();


    // console.log(bodyText)
      //ie to replace all dots on page with hyphens
    //   var replace_str = $('body').html().replace(/./g,'-');
    //   $('body').html(replace_str);

      // //if that doesn't work try this
    //   var strNewString = $('body').html().replace(/./g,'---');
    //   $('body').html(strNewString);

    //   console.log(strNewString)
    
    // console.log($())
    //fn def for scrambling words
    // function scrambleWords(word) {
    //   let result           = '';
    //   let characters       = '迪æ비ΦミュキーマイΦサウàロжзкйлмнпрстфхцчщン茶シζ';
    //   let charactersLength = characters.length;
    //   for ( let i = 0; i < word.length; i++ ) {
    //      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    //   }
    //   return result;
    // }
    
    
    

