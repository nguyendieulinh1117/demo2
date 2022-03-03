$(function () {
    // window.$s.set('enableButtonAddtoCard', false);
    $('#frmPizzaOptions').on('submit', function (e) {
        e.preventDefault();
        $('#productDetailModal').modal("hide");
        var cardStep1 = $("#card-step-1");
        var cardStep2 = $("#card-step-2");
        cardStep1.removeClass("border-armchair").addClass("text-success shadow border-0");
        cardStep1.find('.card-header-text').text('Đã chọn bánh Pizza 1 - PIZZAMIN SEA - HẢI SẢN NHIỆT ĐỚI - Cỡ nhỏ 7 Inch - Đế dày');
        cardStep1.find('[data-target="#card-body-1"]').click();

        cardStep2.removeClass('border-0').addClass('border-armchair');
        cardStep2.find('[data-target="#card-body-2"]').click();
    });
    $('#frmPizzaOptions1').on('submit', function (e) {
        e.preventDefault();
        $('#productDetailModal1').modal("hide");
        var cardStep2 = $("#card-step-2");
        cardStep2.removeClass("border-armchair").addClass("text-success shadow border-0");
        cardStep2.find('.card-header-text').text('Đã chọn bánh Pizza 2 - PIZZAMIN SEA - HẢI SẢN NHIỆT ĐỚI - Cỡ nhỏ 7 Inch - Đế dày');
        cardStep2.find('[data-target="#card-body-2"]').click();
        enableButtonAddtoCard = true;
    });
})