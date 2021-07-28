// ask user name
var userName = prompt("Insert your name: ");
// ask user surname
var surName = prompt("And your surname: ");
// ask user favourite color
var favouriteColor = prompt("What is your favourite color? "); 
// concatenate name, surname and color with "40"
var generatedPassword = userName + surName +favouriteColor + "40";
// write the element created on the doc with the generated password
document.getElementById('scriptTarget').innerText = generatedPassword;
