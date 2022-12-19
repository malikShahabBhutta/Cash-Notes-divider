const billamount=document.getElementById("bill-amount");
const cashgiven=document.getElementById("cash-given");
const checkButton=document.getElementById("clickbutton");
const message=document.getElementById("error-message");
const noOfNotes=document.querySelectorAll(".no-of-notes");//(".no-of-notes");

const availableNotes=[5000,1000,500,100,50,20,10,5,2,1]
checkButton.addEventListener("click",function validateBillAndCashAmount(){
        message.style.display="none";
        if(billamount.value>0){
                if(cashgiven.value>=billamount.value){
                    const amountToBeReturn = cashgiven.value-billamount.value
                    calculaterChange(amountToBeReturn);

                }else{
                    showmessage("the cash provided shoul atleast be equle to the bill amount");
                }
        }
        else{
            showmessage("Invalid amount");
        }
})
    function calculaterChange(amountToBeReturn){
        for(i=0;i<availableNotes.length;i++){
            const numberOfNotes = Math.trunc(amountToBeReturn/availableNotes[i]);
        }
            amountToBeReturn %= availableNotes[i];
            noOfNotes[i].innerHTML=numberOfNotes;

    } 
        function showmessage(msg){
    message.style.display="block";
    message.innerHTML=msg;
}


