function palindrome(str) {
    var originalWord = "";
    var transformedWord = "";
    var invertedWord = "";
    var regex = "";

    regex = /[\W_,.]/g;
    
    originalWord = str.toLowerCase();
    /* transformedWord = originalWord.replace(regex, "").split("").reverse().join(""); */
    transformedWord = originalWord.replace(regex, "");
    invertedWord = transformedWord.split("").reverse().join("");        


    console.log("Original: " + originalWord);
    console.log("Transformed: " + transformedWord);
    console.log("Inverted: " + invertedWord);

    if(transformedWord === invertedWord){
        return true;
    } else{
        return false;
    }
    
  }
  
  console.log(palindrome("0_0 (: /-'\ :.,) 0-01"));
  
  