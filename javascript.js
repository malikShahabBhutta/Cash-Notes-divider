const billamount=document.getElementById("bill-amount");
const cashgiven=document.getElementById("cash-given");
const checkButton=document.getElementById("clickbutton");
const message=document.getElementById("error-message");
checkButton.addEventListener("click",function validateBillAndCashAmount(){

        if(billamount>0){

        }else{
            message.innerHTML="The BIll Amount Should Be greater Then 0";
        }
})


