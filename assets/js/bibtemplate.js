$(document).ready(function(){

    $(".btnPub--abstract").on('click', function(){

        var id = $(this).attr('id').replace("b_", '');
        $("#" + id).fadeToggle(200);
        
    });

    $(".btnPub--BibTex").on('click', function(){

        var id = $(this).attr('id').replace("b_", '');
        $("#" + id).fadeToggle(200);
    });
});