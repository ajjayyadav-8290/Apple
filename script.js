const startDate = new Date("2024-01-01")

function updateDays(){
const today = new Date()

const diff = Math.floor((today - startDate) / (1000*60*60*24))

document.getElementById("days").innerText =
"Days Together: " + diff
}

updateDays()

function saveMemory(){

const photo = document.getElementById("photo").files[0]
const date = document.getElementById("date").value
const message = document.getElementById("message").value

const reader = new FileReader()

reader.onload = function(){

const memory = {
img:reader.result,
date:date,
msg:message
}

let memories = JSON.parse(localStorage.getItem("memories")) || []

memories.push(memory)

localStorage.setItem("memories",JSON.stringify(memories))

loadMemories()

}

reader.readAsDataURL(photo)

}

function loadMemories(){

let memories = JSON.parse(localStorage.getItem("memories")) || []

const timeline = document.getElementById("timeline")

timeline.innerHTML=""

memories.forEach(m => {

timeline.innerHTML += `
<div class="card">
<img src="${m.img}">
<p>${m.date}</p>
<p>${m.msg}</p>
</div>
`

})

}

loadMemories()
