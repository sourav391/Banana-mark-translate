var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output")





function clickhandler() {
    outputdiv.innerText = "sadasdsadsadas " + txtinput.value;


};




btntranslate.addEventListener("click", clickhandler)