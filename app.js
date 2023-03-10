const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const generateBtn = document.querySelector("#generate-btn")
const renderOne = document.querySelector("#password-one")
const renderTwo = document.querySelector("#password-two")

let passwordLength = 35

generateBtn.addEventListener("click",function () {
    renderOne.textContent = ""
    renderTwo.textContent = ""
    for (let index = 0; index < passwordLength; index++) {
        let randomCharactersOne = Math.floor(Math.random() * characters.length)
        let randomCharactersTwo = Math.floor(Math.random() * characters.length)
        renderOne.textContent += characters[randomCharactersOne]
        renderTwo.textContent += characters[randomCharactersTwo]
    }
})