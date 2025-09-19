
/* $(document).ready(function(){
    let win_w = $(window).width()  /*window랑 doc_w document는 같다*/
/*  let win_h = $(window).height()/*너비와 높이값을 알 수 있다.*/
/*  console.log(win_w, win_h)
    $('.wh').text('너비는'+ win_w + ' 높이는' + win_h)
})*/

$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 / CONST는 변수 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 1000,
            disableOnInteraction: true,
        },
    
        // effect: "fade", /* fade 효과 */
    
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_wrap .btn_next ',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_wrap .btn_prev',  
        },
    
    });
	
   
    $('.visual .btn_wrap .btn_play').on('click', function(){
        console.log('실행 버튼누름')
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .btn_wrap .btn_stop').show()
    })
	$('.visual .btn_wrap .btn_stop').on('click', function(){
        console.log('정지 버튼 누름')
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .btn_wrap .btn_play').show()

        
    })//맨끝
    const webzine_swiper = new Swiper('.webzine .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 640px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
    });
    
    $('footer .top').on('click', function(){
        //console.log('top 클릭')
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })

})//맨끝