var passBox = document.querySelector('#password')
var btn = document.querySelector('.Gbtn')
var Copybtn = document.querySelector('.copybtn')


var psl = 12;

btn.addEventListener('click',()=>{
    var password = ''
    var Uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var lowercase = 'abcdefghijklmnopqrstuvwxyz'
    var numbers = '1234567890'
    var symbols = '!"£$%^&*()/<>#\@'
    var allChar = Uppercase+lowercase+numbers+symbols
    password+= Uppercase[Math.floor(Math.random()*Uppercase.length)]
    password+= lowercase[Math.floor(Math.random()*lowercase.length)]
    password+= numbers[Math.floor(Math.random()*numbers.length)]
    password+= symbols[Math.floor(Math.random()*symbols.length)]
    while(psl>password.length){
        password+= allChar[Math.floor(Math.random()*allChar.length)]
    }
    passBox.value = password
})
Copybtn.addEventListener('click',()=>{
    if (passBox.value == '') {
        alert("Please create a Password first")
    }else{
        passBox.select();
        document.execCommand('copy');
    }
})