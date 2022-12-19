const billamount=document.getElementById("bill-amount");
const cashgiven=document.getElementById("cash-given");
const checkButton=document.getElementById("clickbutton");
const message=document.getElementById("error-message");
checkButton.addEventListener("click",function validateBillAndCashAmount(){
        message.style.display="none";
        if(billamount.value>0){
                if(cashgiven.value>=billamount.value){
                    const amountToBeReturn = cashgiven.value-billamount.value
                    calculaterchange(amountToBeReturn);

                }else{
                    showmessage("the cash provided shoul atleast be equle to the bill amount");
                }
        }
        else{
            showmessage("Invalid amount");
        }
})
    function calculaterchange(){

    } 
        function showmessage(msg){
    message.style.display="block";
    message.innerHTML=msg;
}


