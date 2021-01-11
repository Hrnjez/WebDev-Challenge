
$( document ).ready(function() {

    $('.hamburger').on('click',function(){
        $('#mobile-nav-list').toggle(500);
    })
   $('#num1').on('click', function(){
        $('#num1').attr('class','active-number');
        $('#num2').removeAttr('class');
        $('.phase-2').hide(500);
        $('.phase-1').show(500);
    })
    $('#num2').on('click', function(){
        $('#num2').attr('class','active-number');
        $('#num1').removeAttr('class'); 
        $('.phase-1').hide(500);
        $('.phase-2').show(500);
   })
   $('#close-btn').on('click', function(){
        $('.video-player').hide(500);
        $('.video-player iframe').removeAttr('src');
   })
   $('#play-btn').on('click', function() {
    $('.video-player iframe').attr('src','https://www.youtube.com/embed/bKigTZ-N8_0');
        $('.video-player').show(500);
   })
   $('#play-btn-2').on('click', function() {
    $('.video-player iframe').attr('src','https://www.youtube.com/embed/bKigTZ-N8_0');
    $('.video-player').show(500);
})
});
