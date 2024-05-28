let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

document.getElementById("fightbutton").addEventListener("click",display)
function display(){
    var fighter1=fighters[Math.floor(Math.random()*fighters.length)]
    var fighter2=fighters[Math.floor(Math.random()*fighters.length)]
    stageEl.innerHTML=` <h1 class="sticker">${fighter1} v/s ${fighter2}</h1>`
       
}
