const {ipcRenderer} = require('electron')
full = (e) => {
    if(e.keyCode == 122){
        e.preventDefault()
    }
}
full = (e) => {
    if(e.keyCode == 27){
        ipcRenderer.send('MinChannel')
    }
}
var min = document.querySelector('.min')
var close = document.querySelector('.close')
var clock = document.querySelector('.clock')
min.addEventListener('click',()=>{
    ipcRenderer.send('MinChannel')
})
close.addEventListener('click',()=>{
    ipcRenderer.send('CloseChannel')
})
setInterval(()=>{
    const Time = new Date()
    clock.innerHTML = Time.getHours()+' : '+Time.getMinutes()+' : '+Time.getSeconds()
},1)
setInterval(()=>{
    clock.style="-webkit-text-stroke: 10px #1DB9C3;"
    setTimeout(()=>{
        clock.style="-webkit-text-stroke: 10px #BD4B4B;"
    },500)
},1000)