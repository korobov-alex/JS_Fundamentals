const backGround = document.querySelector("body")

function click(){
    const click_btn = document.querySelector('.click');
    click_btn.addEventListener("click", function(event){
        backGround.style.background = "blue"
    })
}

function double_click(){
    const double_click_btn = document.querySelector('.double-click');
    double_click_btn.addEventListener("dblclick", function(event){
        backGround.style.background = "pink"
    })
}

function hold(){
    const hold = document.querySelector('.hold');
    hold.addEventListener("mousedown", function(event) {
        backGround.style.background = "brown";
    });

    hold.addEventListener("mouseup", function(event) {
        backGround.style.background = "white";
    });
}

function hover(){
    const hover_link = document.querySelector('a');
    hover_link.addEventListener("mouseover", function(event) {
        backGround.style.background = "yellow";
    });

    hover_link.addEventListener("mouseout", function(event) {
        backGround.style.background = "white";
    });
}

click()
double_click()
hold()
hover()