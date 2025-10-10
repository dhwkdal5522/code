
$(document).ready(function(){
    /**
     * 기준 1024이하면 모바일 1025 이상이면 pc 
     * 브라우저의 넓이에 따라서 지금 pc 모드인지 모바일인지 구분
     */

    let mobile_size = 1024
    let device_status // pc 인지 mobile인지 구분 
    let win_w // 브라우저 넓이

    function size_chk(){ //함수 정의
        win_w = $(window).width()
        if(win_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    size_chk() //함수 호출 (문서가 로딩된 이후 1번 실행)
    $(window).resize(function(){//브라우저가 리사이즈 될 때 마다 1번 실행 
        size_chk() //함수 호출 
    })

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
	$('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
		//e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
	});
    
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            console.log('모바일이다!!!')
        }
    }); 
   
})/* */
