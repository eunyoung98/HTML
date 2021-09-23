// 모달
$('#about').click(function () {
    alert('ABOUT 페이지는 준비중 입니다.')
});

$('#service').click(function () {
    alert('SERVICE 페이지는 준비중 입니다.')
});

// 모달(CSS) & ajax
//모달 열기
$('#contact').click(function () {
    $.ajax({
        url: 'contact.html',
        success: function (data) {
            $('.popup').prepend(data)
        }
    });
    
    $('.popup_bg').css({
        'display': 'block'
    });
});
//모달 닫기
$('.popup_bg').click(function () {
    $(this).css({
        'display': 'none'
    });

    $.ajax({
        url: 'contact.html',
        success: function (data) {
            $('.popup').empty();
        }
    });
});

//툴팁
$(function () {
    $(document).tooltip();
});