
/////////////////////////////////////////////////////
console.log(" Conan O'Brien: 'Greetings, Nerds!' ");
/////////////////////////////////////////////////////


let state = false;


// Targetting the port button, the content window, and pokeapp img

let buttonTarget = document.querySelector('.portButton');
let thePort =  document.querySelector('.portWindow');
let theImg = document.querySelector('.pokePic');
let theSnippet = document.querySelector('.snippet');


buttonTarget.addEventListener('click',() => {
    
    state = !state;

    state ? thePort.setAttribute('class', 'portWindow2') : thePort.setAttribute('class', 'portWindow');
    state ? theImg.setAttribute('class', 'pokePic2') : theImg.setAttribute('class', 'pokePic');
    state ? theSnippet.setAttribute('class','snippet2') : theSnippet.setAttribute('class', 'snippet')

})