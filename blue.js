const button_div =document.getElementById("btn");
const color_div =document.getElementById("color");
const colorsArray = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]

button_div.addEventListener("click" ,(event) => {
    const randomNumb = getRandomnumber();
    
    document.body.style.background = colorsArray[randomNumb]
    color.textContent = colorsArray[randomNumb]
})

function getRandomnumber(){
    return Math.floor(Math.random()*colorsArray.length)
}
