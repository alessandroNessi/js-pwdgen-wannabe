// getform data
function formSubmit() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var favouriteColor = document.getElementById("favoriteColor").value;
    var generatedPassword = firstName + lastName +favouriteColor + "40";
    document.getElementById('scriptTarget').innerHTML = generatedPassword;
    alert(generatedPassword);
}
