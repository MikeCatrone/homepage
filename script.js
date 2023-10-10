

/////////////////////////////////////////////////////
console.log(" Conan O'Brien: 'Greetings, Nerds!' ");
/////////////////////////////////////////////////////


let state = false;


// Targetting the port button, the content window, and pokeapp img

let buttonTarget = document.querySelector('.portButton');
let thePort =  document.querySelector('.portWindow');
let theImg = document.querySelector('.pokePic');
let theImg2 = document.querySelector('.shoppingPic');
let theSnippet = document.querySelector('.snippet');
let jsLogo = document.querySelector('.jsLogo');
let reactLogo = document.querySelector('.reactLogo');


buttonTarget.addEventListener('click',() => {
    
    state = !state;

    state ? thePort.setAttribute('class', 'portWindow2') : thePort.setAttribute('class', 'portWindow');
    state ? theImg.setAttribute('class', 'pokePic2') : theImg.setAttribute('class', 'pokePic');
    state ? theSnippet.setAttribute('class','snippet2') : theSnippet.setAttribute('class', 'snippet');
    state ? theImg2.setAttribute('class', 'shoppingPic2') : theImg2.setAttribute('class', 'shoppingPic');
    state ? jsLogo.setAttribute('class', 'jsLogo2') : jsLogo.setAttribute('class', 'jsLogo');
    state ? reactLogo.setAttribute('class', 'reactLogo2') : reactLogo.setAttribute('class', 'reactLogo');

})
