$(document).ready(function(){

    $(".btnPub--abstract").on('click', function(){

        bitText = $(this).next()[0];
        if(bitText){
           var id =  $(bitText).attr("id").replace("b_", '')
           $("#" + id).fadeToggle('hide');
        }

        var id = $(this).attr('id').replace("b_", '');
        $("#" + id).fadeToggle(200);
        
    });

    $(".btnPub--BibTex").on('click', function(){

        bitText = $(this).prev()[0];
        if(bitText){
           var id =  $(bitText).attr("id").replace("b_", '')
           $("#" + id).fadeToggle('hide');
        }

        var id = $(this).attr('id').replace("b_", '');
        $("#" + id).fadeToggle(200);
    });

    
})