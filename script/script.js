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
    document.getElementById('scriptTarget').classList.remove('d-none');
}
// copy text automatically on click
function copyText() {
    document.getElementById("myInput").classList.remove('d-none');
    document.getElementById("myInput").value = document.getElementById("scriptTarget").innerHTML;
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.getElementById("myInput").classList.add('d-none');
}