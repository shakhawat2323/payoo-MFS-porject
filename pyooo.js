
// 1.step Event handler
document.getElementById('btn-login').addEventListener('click',function(event){
    // 2.step prevent default behavior (prevent reloading browser)
    event.preventDefault();
    //3.step get theke phone number
    
    const phoneNumber= document.getElementById('phone-number').value;
    const password = document.getElementById('password').value;
    //4 step Number && password valatason

    if(phoneNumber==='5'&& password ==='1234'){
        console.log('you ar a login');
        // Allow user to use the website
        window.location.href='./home.html'
    }
    else{
        alert('Rong phone numbar and pin')
    }

})