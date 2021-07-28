// getform data
function formSubmit() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var favouriteColor = document.getElementById("favoriteColor").value;
    var generatedPassword = firstName + lastName +favouriteColor + "40";
    if( firstName == "" || lastName == "" || favouriteColor == ""){
        alert("error, data are incolplete");
        return
    }
    document.getElementById('scriptTarget').innerHTML = generatedPassword;
    // document.getElementById("MyElement").classList.add('MyClass');
    document.getElementById('scriptTarget').classList.remove('d-none');
    // alert(generatedPassword);
}
// function copyText