$(function(){
    $("input").change(function(){
        let checkedCount = $("input:checked").length;
        if(checkedCount === 3){
            $("input").prop( "disabled", true );
        }
    })
})