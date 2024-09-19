// 1step : add the event hendaler add money botton
document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const inputAddMoney = document.getElementById('input-money').value;
    const pinNumberInput = document.getElementById('input-btn-pin').value;
    
    if(pinNumberInput==='1234'){
        // console.log('adding money in your acount')
        // get The carrent balance
        const mainbalance = document.getElementById('main-balance').innerText
        
        const addmoneyinput = parseFloat(inputAddMoney);
        const avalavalbalance= parseFloat(mainbalance);
        const  Balance = addmoneyinput + avalavalbalance;
        
        // update a main balance 
        const Upatatebalance = document.getElementById('main-balance').innerText=Balance;
        
    }
    else{
        alert('Faild To Add Money')
    }
 

})