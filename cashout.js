document.getElementById('cashout').addEventListener('click',function(event){
    event.preventDefault();
    
    const  cashoutmoney=document.getElementById('input-cashout').value;
    const  cashoutpin = document.getElementById('input-cashout-pin').value;
    if(cashoutpin==='jjj'){

        const mainbalance =document.getElementById('main-balance').innerText;
        const cashoutinputmone= parseFloat(cashoutmoney);
        const balance =  mainbalance - cashoutinputmone;

        const updateCashOutbalance = document.getElementById('main-balance').innerText=balance

    }
    else{
        alert('tray agein  no Cash out')
    }
})