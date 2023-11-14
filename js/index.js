$(document).ready(function(){
    let position = $(document).scrollTop();
    if(position>625){
        $('#navbar').addClass('fixed-top');
    }else{
        $('#navbar').removeClass('fixed-top');
    }
});

$(window).scroll(function(){
    let position = $(document).scrollTop();
    console.log(position);
    if(position > 100 && position < 700){
        $('#about_animate_left').addClass('animate__animated animate__fadeInLeft')
        $('#about_animate_right').addClass('animate__animated animate__fadeInRight')
    }else if(position > 2300 && position < 3000) {
        $('#myresume_intership').addClass('animate__animated animate__fadeInUp')
        $('#myresume_education').addClass('animate__animated animate__fadeInUp animate__delay-1s')
        $('#myresume_skills').addClass('animate__animated animate__fadeInUp animate__delay-2s')
    }
});

$(window).scroll(function(){
    let position = $(document).scrollTop();
    if(position>625){
        $('#navbar').addClass('fixed-top');
    }else{
        $('#navbar').removeClass('fixed-top');
    }
});


$('a.nav-link').on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        if(hash === "#about"){
            $('html, body').scrollTop(615);
        }
        if(hash === "#my-resume"){
            $('html, body').scrollTop(3050);
        }
        if(hash === "#certification"){
            $('html, body').scrollTop(1360);
        }
        if(hash === "#portfolio"){
            $('html, body').scrollTop(4000);
        }
        if(hash === '#contact'){
            $('html, body').scrollTop(4900);
        }
        
    }
});


$('.portfolio-card').hover(function(){
    $(this).find("div").addClass('animate__zoomIn');
},function () {
    $(this).find("div").removeClass('animate__zoomIn');
})