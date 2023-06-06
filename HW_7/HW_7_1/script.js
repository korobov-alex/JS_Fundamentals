//
let newWindow = window.open("index.html", "index.html", "width=300, heigth=300")

//
setTimeout(function(){
    newWindow.resizeTo(500, 500)
},
2000)

//
setTimeout(function(){
    newWindow.moveTo(200,200)
},
4000)

//
setTimeout(function(){
    newWindow.close()
},
6000)