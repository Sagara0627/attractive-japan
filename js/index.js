$(function () {
    $('#article .carousel-control-prev').on('click', function (e) {
        $(this).addClass('d-none');
        $('.carousel-control-next').removeClass('d-none');
    })

    $('#article .carousel-control-next').on('click', function (e) {
        $(this).addClass('d-none');
        $('.carousel-control-prev').removeClass('d-none');
    })
});
