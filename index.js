var btnTranslate=document.querySelector("#btn-translate");

var textareaInput=document.querySelector(".textarea-input");

var outputArea=document.querySelector(".output-area");


var serverURL= "https://api.funtranslations.com/translate/dothraki.json"

function getTranslationURL(textareaInput)
{
    return serverURL+"?"+"text="+textareaInput;
}
function errorHandler(error)
{
    console.log("error occured",error)
    alert("Sever issue !! Try after sometime")
}
function clickEventHandler()
{
   //outputArea.innerText="gdhf"+textareaInput.value;
   var inputText=textareaInput.value;
   fetch(getTranslationURL(inputText))
   .then(response => response.json())
   .then(json =>{
       var translatedText=json.contents.translated;
       outputArea.innerText=translatedText;
   })
   .catch(errorHandler)

};
btnTranslate.addEventListener("click",clickEventHandler)