let submitBtn = document.querySelector('button');
let cardOne = document.querySelector('.card');
let cardTwo = document.querySelector('.card_two')
let returnBtn = document.querySelector('.material-symbols-outlined');
let numberSelect = document.querySelectorAll('li');
let changeNumber = document.querySelector('.span_one');



numberSelect[0].addEventListener('click', function(){
    if (numberSelect[0].style.background = 'hsla(216, 12%, 54%, 0.13)') {
        numberSelect[0].style.background = 'hsl(25, 97%, 53%)';
        changeNumber.innerHTML = '1';
    }
});

numberSelect[1].addEventListener('click', function(){
    if (numberSelect[1].style.background = 'hsla(216, 12%, 54%, 0.13)') {
        numberSelect[1].style.background = 'hsl(25, 97%, 53%)';
        changeNumber.innerHTML = '2';
    }
});

numberSelect[2].addEventListener('click', function(){
    if (numberSelect[2].style.background = 'hsla(216, 12%, 54%, 0.13)') {
        numberSelect[2].style.background = 'hsl(25, 97%, 53%)';
        changeNumber.innerHTML = '3';
    }
});

numberSelect[3].addEventListener('click', function(){
    if (numberSelect[3].style.background = 'hsla(216, 12%, 54%, 0.13)') {
        numberSelect[3].style.background = 'hsl(25, 97%, 53%)';
        changeNumber.innerHTML = '4';
    }
});

numberSelect[4].addEventListener('click', function(){
    if (numberSelect[4].style.background = 'hsla(216, 12%, 54%, 0.13)') {
        numberSelect[4].style.background = 'hsl(25, 97%, 53%)';
        changeNumber.innerHTML = '5';
    }
});



submitBtn.addEventListener('click', function(){
    if (cardOne.style.display = 'flex' && numberSelect != '') {
         cardOne.style.display = 'none';
         cardTwo.style.display = 'flex';
    } else {
        cardOne.style.display = 'flex';
    }
});

 returnBtn.addEventListener('click', function(){
   window.location.reload();
 })
 
 