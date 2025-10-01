

$(document).ready(function(){

    /*
메뉴에 마우스를 오버하면 header menu_over 클래스를 추가
header흰색배경에서 마우스가 밖으로 나가면 header menu_over 삭제
*/

   $('header .gnb').on('mouseenter',function(){
    //console.log('어예~')
    $('header').addClass('menu_over')
   })
   $('header').on('mouseleave',function(){
    //console.log('시무룩')
    $('header').removeClass('menu_over')
   })

/* 
이벤트대상 ... header .gnb .gnb_wrap ul.depth1 > li
결론 : 1. 마우스를 오버한1차메뉴 li에 over클래스를 줌
header .gnb .gnb_wrap ul.depth1 > li
결론 2. 이전에 오버했던 메뉴의 1차메뉴 1i에서 over클래스를 삭제  */

$('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
    $(this).addClass('over')
    //console.log('오버어')
})
$('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave',function(){
    //console.log('아웃')
    $(this).removeClass('over')
})

    /*
        조건 
        닫힌 메뉴를 클릭하면 열리고 (open class 추가)
         --> 다른 열린 메뉴가 있다면 닫음
        열린 메뉴를 클릭하면 닫히고 (open class 없앰)
        --> 열린메뉴와 닫힌 메뉴를 구분하는 방법 
        li에 open 이 있으면 열린메뉴, 없으면 닫힌 메뉴
        결론
        header .gnb .gnb_wrap ul.depth1 > li 에 open class가 들어감
     */ 
    $('header .gnb .gnb_wrap ul.depth1 > li').on('click', function(){
        let open_true = $(this).hasClass('open')
        console.log(open_true)
        if(open_true == true){ //열려있다면
            $(this).removeClass('open')
        }else{ //닫혀있다면 
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
            $(this).addClass('open')
        }
        
    })
    /**
     * 
     * header .gnb .gnb_open를 클릭하면 메뉴가 열림 
     * header에 menu open이라는 class 추가 
     * header .gnb .gnb_close를 클릭하면 메뉴가 닫힘
     * header에 menu open이라는 class 삭제
     */

    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
        $('header .gnb .gnb_open').on('click', function(){
            $('header').removeClass('menu_close')
    })
})//