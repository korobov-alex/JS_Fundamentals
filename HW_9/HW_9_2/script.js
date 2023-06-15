$(function(){
    let links = $("a").attr("href");
    if(links.startsWith("https")){
        $("a").attr("target", "_blank")
    }else{
        alert("This site is not https type")
    }
});
