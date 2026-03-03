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
        $(this).children('.linkTit').hide();
    });
    $('#introWrap .introLink').mouseleave(function () {
        $('#introWrap .hoverImg').removeClass('active');
        $('#introWrap .hover').removeClass('active');
        $('#introWrap .linkTit').show();
    });

});