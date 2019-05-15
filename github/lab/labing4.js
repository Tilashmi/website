var myHeading = document.querySelector('h1');
myHeading.textContent = 'Jelly says hi!';
alert ('jello!');

var myImage = document.querySelector('img');
//img chnager 
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'jelly.jpg') {
      myImage.setAttribute ('src','glowjelly.jpg');
    } else {
      myImage.setAttribute ('src','jelly.jpg');
    }
}
//msg using button
var myButton = document.querySelector('button');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'All about jellyfish,for ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'All about jellyfish,for ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}