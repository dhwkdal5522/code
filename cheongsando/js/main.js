//console.log('연결') 제이쿼리 연결 확인
$(document).ready(function(){ //제이쿼리 라이브러리 연결됐음을 확인
    //console.log('연결')
    /*
        여러줄 주석
        .tour .list ul li에 마우스를 올리면 마우스를 올린 li에만 
        on 클래스를 추가해야함
        li에 오버 하나 되면 나머지는 다 remove하라. 없는애는 가만히 있고, 있는애만 지움
    */
   $('.tour .list ul li').on('mouseenter', function(){ //
    //onsole.log('오버했돠')
    $('.tour .list ul li').removeClass('on')
    $(this).addClass('on')
   })
   $('footer .right_ara .family_site button.family_open').on('click',function(){
    console.log('클릭함')
    $('footer .right_ara .family_site').addClass('open')
   })
})