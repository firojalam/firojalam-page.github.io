$(document).ready(function() {
    tocbot.init({
        // Where to render the table of contents.
        tocSelector: '.toc_wrap',
        // Where to grab the headings to build the table of contents.
        contentSelector: '#core-wrapper',
        // Which headings to grab inside of the contentSelector element.
        headingSelector: 'h1, h2, h3',
        // For headings inside relative or absolute positioned containers within content.
        hasInnerContainers: true,
        ignoreSelector: '[data-toc-skip]',
        orderedList: false,
        scrollSmooth: false
    });

    // menu  
    $('.tab-menu li a').on('click', function () {
        var target = $(this).attr('data-rel');
        $('.tab-menu li a').removeClass('active');
        $(this).addClass('active');
        $("#" + target).fadeIn('slow').siblings(".tab-box").hide();
        return false;
    });
    // Example: Implementing a sticky header
    var header = $("#topbar-wrapper");
    var origOffsetY = header.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= 120) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    }
    $(window).on("scroll", scroll);

    // mobile menu 
    $('.menuicon').on('click',function(){
        $('.main-menu').toggleClass("mobilemenu");
    });
});