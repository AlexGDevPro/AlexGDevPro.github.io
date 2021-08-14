$(function(){

    // hide all sections
    $('.section').hide();
    // show only the active class section
    $('.active').show();

    // on nav-links click
    $('.home-section .nav-link').click(function (e) {
        e.preventDefault();
        // storing the clicked link
        let link = $(this);

        // hide active class section and remove active class
        $('.section.active').removeClass('active').fadeOut(300, function (){
            // display the section that refers to the clicked navigation link and add the active class
            $('.section[data-name="' + $(link).attr('href') + '"]').addClass('active').fadeIn(300);
        });
    });

    // on back-home button click
    $('.back-home a').click(function() {
        // storing the clicked link
        let link = $(this);

        // hide active class section and remove active class
        link.parent().parent().removeClass('active').fadeOut(300, function (){
            // display the home-section and add the active class
            $('.section[data-name="' + $(link).attr('href') + '"]').addClass('active').fadeIn(300);
        });
    });
});