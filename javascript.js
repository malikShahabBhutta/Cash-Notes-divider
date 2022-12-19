const billamount=document.querySelector("#bill-amount");
const cashgiven=document.querySelector("#cash-given");
const checkButton=document.querySelector("clickbutton");
const message=document.querySelector("#error-message");
checkButton.addEventListener("click",function validateBillAndCashAmount(){

        if(billamount>0){

        }else{
            message.innerHTML="The BIll Amount Should Be greater Then 0";
        }
})


