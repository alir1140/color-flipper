
const color = document.getElementById("color")
const btn = document.getElementById("btn")
const colores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

btn.addEventListener("click",(event)=>{
    let colorCreator = "#"
    for(let i=0;i<6;i++){
        colorCreator += colores[getRandomNumber()]
    }
    color.textContent=colorCreator
    document.body.style.background=colorCreator
})

const getRandomNumber = ()=>{  
    return Math.floor(Math.random()*colores.length)
}
