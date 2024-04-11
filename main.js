const barsBtn = document.querySelector(".bars")
const right = document.querySelector(".right")
const left = document.querySelector(".left")

function barsEvent() {
  console.log("bars Click")
  right.classList.toggle("active")
  left.classList.toggle("active")
  
}

barsBtn.addEventListener("click", barsEvent)