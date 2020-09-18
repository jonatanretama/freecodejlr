var typeCash = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],    
  ["TWENTY", 20],
  ["ONE HUNDRED", 100],
];

function checkCashRegister(price, cash, cid) {
    var change = [];        
    var totalInRegister = 0.0;
    let cashToBack = cash - price;      
    let totalSum = 0.0, restTotalInCid = 0.0;        
    
    for(let i in cid){      
      for(let j = 1; j < cid[i].length; j += 1){
        totalInRegister += cid[i][j];           
      }            
    }    

    if (totalInRegister === cashToBack){      
      return {status: "CLOSED", change: cid}
    } else if (totalInRegister < cashToBack) {      
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (totalInRegister > cashToBack) {
      for(let i = typeCash.length-1; i >= 0; i--){        
        while(cashToBack >= typeCash[i][1]){
          if (cid[i][1] === 0){
            break;
          }
          totalSum += typeCash[i][1];
          cashToBack -= typeCash[i][1];
          cashToBack = cashToBack.toFixed(2);
          cid[i][1] -= typeCash[i][1];
        }
        if(totalSum > 0){
          change.push([typeCash[i][0], totalSum]);      
        }
        totalSum = 0.0;
      }    
      for(let i in change){
        restTotalInCid += cid[i][1];
      }      
      if (restTotalInCid > cashToBack) {
        return {status: "OPEN", change: change};          
      } else{
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }
    } 
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

    


  /*
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
   ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
   should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1],
    ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument 
(price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you 
cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to 
the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to 
lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

*/
