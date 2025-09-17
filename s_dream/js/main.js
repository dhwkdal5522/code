
$(document).ready(function(){
    let win_w = $(window).width()  /*window랑 doc_w document는 같다*/
    let win_h = $(window).height()/*너비와 높이값을 알 수 있다.*/
    console.log(win_w, win_h)
    $('.wh').text('너비는'+ win_w + ' 높이는' + win_h)
})