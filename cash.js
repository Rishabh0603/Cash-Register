
var bill  = document.querySelector("#bill-amount");
var payment = document.querySelector("#cash-given");
var clicking = document.querySelector("#checkButton");
var message = document.querySelector("#error-message");
var notes= document.querySelectorAll(".no-of-notes");
var availablenotes =[2000, 500,200, 100, 50, 10, 1];




function clickEventHandler(){
    var billdue = bill.value;
    var paymentdone = payment.value;
    message.style.display="none";
    if(billdue > 0)
    {
        if(paymentdone>=billdue){
            var amountobeReturned = paymentdone - billdue;
            Calculatechange(amountobeReturned);
        }
        else{
             errormessage("do you want to wash plates");
            }
    }
    else{
         errormessage("amount due should be greater than 0");
        }
 }

    clicking.addEventListener("click",clickEventHandler);
    
    function errormessage(msg){
        message.style.display = "block";
        message.innerText = msg;
    }

 function Calculatechange(amountobeReturned){
    for(var i = 0; i < availablenotes.length; i++){
       var numberofnotes = Math.trunc(amountobeReturned/availablenotes[i]);
       amountobeReturned = amountobeReturned%availablenotes[i];
       notes[i].innerText=numberofnotes;
        }
 }
