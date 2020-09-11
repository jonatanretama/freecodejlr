function rot13(str) {
    let unicodeArray = [];
    let regex = /[A-Z]/;
    str = str.split("");
    //console.log(str);
    for (let i in str) {
      if (regex.test(str[i])) {        
        unicodeArray.push(((str[i].charCodeAt() -65 + 13) % 26) +65);
      } else {
        unicodeArray.push(str[i].charCodeAt());
      }
    }
    str = String.fromCharCode.apply(this, unicodeArray);
    return str;
  }
  
  console.log(rot13("SERR CVMMN!"));
  /* 
  console.log((("O".charCodeAt()-65+13)%26));
  console.log((("O".charCodeAt()-65+13)%26)+65);
  */

  //All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
