function convertToRoman(num){

    const romanObj = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
  
    let resultado = "";
    for (let i in romanObj) {      
      resultado += i.repeat(Math.floor(num / romanObj[i]));
      //console.log(resultado);
      num = num % romanObj[i];
      //console.log(num);
      
      //console.log(`Objeto.${r} = Número: ${romanos[r]}`);
    }
    return resultado;
  }
  
  
  console.log(convertToRoman(19));