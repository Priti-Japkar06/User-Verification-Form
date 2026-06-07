let inputElement = document.getElementById("inputElement");
let signInTextElement = document.getElementById("signInText");

function signIn(){
    let inputvalue = inputElement.value;
    let verifyText = "Hi" + "  " + inputvalue + "  " +  "verifying Your Account.....";
    signInTextElement.textContent = verifyText;
}