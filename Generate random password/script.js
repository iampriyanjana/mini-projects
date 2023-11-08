let genPass=document.getElementById("generate-pass");
let inputText=document.getElementById("inputt");
let pass="";

let alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-/.,;?><:\|{}[]";
function display(){
    pass="";
    for(let i=0;i<12;i++){
        let letterIndex=Math.floor(Math.random()*alphabet.length);
        let letter=alphabet.charAt(letterIndex);
        pass=pass+letter;
    }
    inputText.value=pass;
}

function copyText(){
    navigator.clipboard.writeText(inputText.value).then(()=>{
       console.log('Content copied to clipbord');
    },()=>{
        console.error('Failed to copy');
         
});
}