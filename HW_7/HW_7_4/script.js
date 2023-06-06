function chooseAndDelete(){
    const btn = document.querySelector('button');
    const list = document.querySelector('select');
    btn.addEventListener("click", function(event){
        list.remove(list.selectedIndex)
    })
}

chooseAndDelete()