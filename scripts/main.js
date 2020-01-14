/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/OE58FKT_3smllr.jpg') {
      myImage.setAttribute ('src','images/OE58FKT_2.jpg');
    } else {
      myImage.setAttribute ('src','images/OE58FKT_3smllr.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Nice car, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Nice car, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }