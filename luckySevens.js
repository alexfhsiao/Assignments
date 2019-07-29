function rollDice() {
    return Math.floor((Math.random()*6))+1;
}
function validateItems() {
    var bet=document.forms["luckySeven"]["startBet"].value;
    if (bet == "" || isNaN(bet) || bet<0) {
        alert ("Starting Bet must be a positive number");
        document.forms["luckySevens"]["startBet"].focus();
        return false;
    }
    var rollCount=0;
    var highestMoney=Number(bet);
    var highestRoll=0;
    while (bet>0) {
        if (rollDice()+rollDice()==7){
            bet=bet+4;
        }
        else {
            bet=bet-1;
        }
        rollCount++
        if (bet>highestMoney){
            highestMoney=bet;
            highestRoll=rollCount;
        }
    }
    document.getElementById("results").style.display="block";
    document.getElementById("reset").style.display="block";
    document.getElementById("startBet2").innerText=document.forms["luckySeven"]["startBet"].value;
    document.getElementById("rollCount").innerText=rollCount;
    document.getElementById("highestWon").innerText=highestMoney;
    document.getElementById("highestRoll").innerText=highestRoll;
    return false;
}
function resetForm(){
   document.forms["luckySeven"]["startBet"].value="";
   document.forms["luckySeven"]["startBet"].focus();
   document.getElementById("results").style.display="none";
   document.getElementById("reset").style.display="none";
}