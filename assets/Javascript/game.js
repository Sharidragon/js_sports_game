
const resetButton = document.querySelector('#reset-button');
const resetCount = document.querySelector('#num-resets')

const teamoneButton = document.querySelector('#teamone-shoot-button');
const counterOne = document.querySelector('#teamone-numgoals');
const shotOne = document.querySelector('#teamone-numshots');

const teamtwoButton = document.querySelector('#teamtwo-shoot-button');
const countertwo = document.querySelector('#teamtwo-numgoals');
const shotTwo = document.querySelector('#teamtwo-numshots');

const soundSwish = new Audio('./assets/Sound/Swish.mp3')

teamoneButton.addEventListener('click', function () {
    console.log('team one shot');
    let newcoutervalue = Number(shotOne.innerHTML) + 1;
    shotOne.innerHTML = newcoutervalue

soundSwish.play()
var x = Math.floor(Math.random() * 10);

if(x > 6) {
    let newcoutervalue = Number(counterOne.innerHTML) + 1
    counterOne.innerHTML = newcoutervalue
}

if(counterOne === 10) {
    console.log('team one wins')
    alert('Team One wins')
}
})

teamtwoButton.addEventListener('click', function () {
    console.log('team two shot');
    let newcoutervalue = Number(shotTwo.innerHTML) + 1;
    shotTwo.innerHTML = newcoutervalue

    soundSwish.play()
    
var x = Math.floor(Math.random() * 10);

if(x > 6) {
    let newcoutervalue = Number(countertwo.innerHTML) + 1
    countertwo.innerHTML = newcoutervalue
}

if(countertwo === 10) {
    console.log('team two wins')
    alert('Team two wins')
}
})

resetButton.addEventListener('click', function(){
    console.log('Score reset');
    let newcoutervalue = Number(resetCount.innerHTML) + 1
    resetCount.innerHTML = newcoutervalue
    
    shotOne.innerHTML = 0;
    shotTwo.innerHTML = 0;
    counterOne.innerHTML = 0;
    countertwo.innerHTML = 0;
})
