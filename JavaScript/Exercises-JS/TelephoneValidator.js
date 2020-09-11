function telephoneCheck(str) {
    let regex = /^(\+\s?)?(1\s?)?(\(\d{3}\)|\d{3})((\s)|(\-))?\d{3}((\s)|(\-))?\d{4}$/;
    let resultado = regex.test(str);
    return resultado;
  }
  
  console.log(telephoneCheck("+ 1 (555)-555-5555"));
  

  /*

  Your job is to validate or reject the US phone number based on any combination 
  of the formats provided above. The area code is required. If the country code is 
  provided, you must confirm that the country code is 1. Return true if the string 
  is a valid US phone number; otherwise return false.

  */