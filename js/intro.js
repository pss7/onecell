$(function () {

    /* intro */
    $(window).load(function () {
        $('#introWrap .introMain').addClass('active');
    });

    $('#introWrap .introLink > li').mouseover(function () {
        var Idx = $(this).index();
        $('#introWrap .hoverImg').removeClass('active');
        $('#introWrap .hoverImg').eq(Idx).addClass('active');
        $('#introWrap .hover').removeClass('active');
        $(this).children('.hover').addClass('active');
        $('#introWrap .linkTit').show();
        $('#introWrap .linkTit').removeClass('active');
        $(this).children('.linkTit').addClass('active');
    });
    $('#introWrap .introLink').mouseleave(function () {
        $('#introWrap .hoverImg').removeClass('active');
        $('#introWrap .hover').removeClass('active');
        $('#introWrap .linkTit').removeClass('active');
    });

});