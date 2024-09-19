document.getElementById('cashout-from').addEventListener('click',function(){

    

    document.getElementById('addmoneybtn-from').classList.remove('hidden')
    document.getElementById('addmone-forom1').classList.add('hidden')

});

// show money from hidden ta cashout froem

document.getElementById('addmone-from').addEventListener('click',function(){

    document.getElementById('addmone-forom1').classList.remove('hidden');
    document.getElementById('addmoneybtn-from').classList.add('hidden')
})