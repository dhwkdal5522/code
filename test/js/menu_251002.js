
$(document).ready(function(){
/**누구한테 header .gnb .gnb_wrap ul.depth1
 * 뭘 했을때 오버했을 때
 * 결론
 * header .gnb .gnb_wrap ul.depth1에 오버 클래스추가
 * 제한 조건 - li 중에서 오버한 한개만 over클래스 들어감
 *          - 메뉴에서 벋어나면 over가 사라짐 */
$('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin',function(){
    $(this).addClass('over')
    console.log('오버했음')
})
$('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave focusout',function(){
    $(this).removeClass('over')
    console.log('아웃했음')
})
/**
 * 누구한테 header .gnb
 * 뭘했을때? 오버했을때
 * 결론
 * header에 menu_over
 * 제한 조건 
 * 오버해서 생성된 흰색 배경 안에서는 아웃 안됨.
 * 키보드 탭으로도 메뉴가 보여야 함 focusin
 */
$('header .gnb').on('mouseenter focusin',function(){
    $('header').addClass('menu_over')
    
})
$('header').on('mouseleave',function(){
    $('header').removeClass('menu_over')
})
$('header .util .lang .lang_open').on('focusin',function(){
    /**키보드 tab키로 이동할때 header에 focusout으로 주면 메뉴 이동할때마다 아웃됨
     * 메뉴 다음에 나오는 button이나 a한테 focus가 가면 메뉴를 닫는것으로 함
     */
    $('header').removeClass('menu_over')
})
/** 모바일에서 1차메뉴를 클릭하면 2차 메뉴 
 */


})/* */
