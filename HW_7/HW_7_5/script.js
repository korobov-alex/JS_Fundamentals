function eventChecker(){
    const btn = document.querySelector('button');
    const paragraph = document.querySelector('p');
    ['mouseover', 'click', 'mouseout'].forEach(event => btn.addEventListener(event, showAction));
    function showAction(event){
        paragraph.innerHTML += event.type + '<br>';
    }   
}

eventChecker()