$(document).ready(function(){

    /****************** 시작 : 지금 pc 버전인지 모바일인지 체크 (메뉴상태) *****************/
     
    let mobile_size = 1024 //1024 부터 모바일 버전 
    let window_w 
    let device_status // pc, mobile 

    function device_chk (){/*브라우저 리사이즈 될 때마다 체크 , 함수를 정의한다 (선언)*/ 
        window_w = $(window).width() // 현재 브라우저의 넓이를 구하라
        if(window_w > mobile_size){ //브라우저 넓이가 1024를 넘었다는 의미 : 즉 pc 버전임 
            device_status = 'pc' //글자는 따옴표
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    } 
    device_chk() //html의 로딩이 완료된 이후 단 1번 실행
    $(window).resize(function(){ //브라우저가 리사이즈 될 때마다 실행하라는 명령
        device_chk()
    })

    /****************** 시작 : 지금 pc 버전인지 모바일인지 체크 (메뉴상태) *****************/
    // visual에 swiper 연결
    let visual_time = 5000 //변수
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: visual_time,
            disableOnInteraction: true,
        },
    
        //effect: "fade", /* fade 효과 */
    
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    
    });
    // visual_swiper.autoplay.start();  /* 일시정지 기능 */
    $('.visual .ctrl_btn .stop').on('click',function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .play').css('display','flex')
    })
    $('.visual .ctrl_btn .play').on('click',function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .stop').css('display','flex')
        updateCurrent()
    })


    // 전체 슬라이드 개수 (loop 상태에서도 실제 슬라이드 개수만)
    const totalSlides = $('.visual .swiper .swiper-slide').not('.swiper-slide-duplicate').length;
    $('.visual .paging .total').text(totalSlides); // 총 개수 표시

    // 현재 슬라이드 번호 표시 함수
    function updateCurrent() {
        let realIndex = visual_swiper.realIndex + 1; // 실제 인덱스 (0부터 시작하므로 +1)
        $('.visual .paging .current').text(realIndex);
        //슬라이드가 교체되면 제일 먼저 넓이를 0으로 초기화 해야함
        $('.visual .ctrl_btn .paging .bar span').stop()//animate 종료   
        $('.visual .ctrl_btn .paging .bar span').width(0)
        $('.visual .ctrl_btn .paging .bar span').animate({
            width : '100%'
        },visual_time)
    }

    // 처음 로드 시 한번 실행
    updateCurrent();

    // 슬라이드 변경될 때마다 실행
    visual_swiper.on('slideChange', function () {
        updateCurrent();
    });
    // visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    // visual_swiper.autoplay.start();  /* 재생 기능 */

    /******************끝 :visual swiper**************** */
    /****************** 시작 : PC 오버메뉴 **************** 
     * 메뉴에 마우스를 오버했을 때 (header .gnb)
     * header에 menu_pc 클래스 추가  
     * 마우스를 오버한 메뉴의 1차 메뉴 li에 오버 클래스 추가
     * (header .gnb .gnb_wrap ul.depth1 > li)
     * --> 오버한 li에만 over 클래스를 줌
     * --> 모든 li에서 over를 빼고 오버한 li에만 over 클래스를 줌
     * pc 버전에서만... >> PC 인지 모바일인지 구분하도록 js에서 코드
     * 메뉴를 오버해서 바뀐 색상의 영역 내부에서는 오버가 유지되고 그 밖에 나갈때 아웃
    */
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin',function(){ /*> li 가 있으면 옆에있는 li도 카운트함 */
        //키보드 접근성 pc일때만 하라고 명령, 모바일일 때는 하지 않음 / == : 비교연산자 
        if(device_status == 'pc'){
            // console.log('오버') //focusin > ****1 ) 키보드 접근성
            $('header').addClass('menu_pc')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over') //***2 ) 키보드접근성 */
            $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 ').hide()//pc 버전에서 display none이 자동으로 생긴경우
            $(this).addClass('over')
            $(this).find('.depth2').slideDown() //pc 버전에서 display none이 자동으로 생긴경우
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave',function(){ /*> li 가 있으면 옆에있는 li도 카운트함 */
        if(device_status == 'pc'){ //pc에서만 작동되도록
            $(this).removeClass('over')//** 키보드 접근성 : 번외 )) mouseleave 옆에 focusout 해서 header 배경을 없애주는건 안해줘도 상관은 없다.
            $(this).find('.depth2').hide()
        }
    })
    $('header').on('mouseleave',function(){ /*> li 가 있으면 옆에있는 li도 카운트함 */
        $(this).removeClass('menu_pc')
    })
    /*** 3 )키보드 접근성 마지막 메뉴에서 포커스 아웃시키기 위해서 서치메뉴로 갔을때 포커스 아웃되게 함 */
    $('header .util .search .sch_open').on('focusin',function(){
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over') 
    })
    /****************** 끝 : PC 오버메뉴 **************** */
     /****************** 시작 : 모바일버전 1차 메뉴 **************** *
      * 닫혀있는 메뉴를 클릭하면 기존의 다른 메뉴를 닫고 나만 열기. (open클래스 추가)
      * 열려있는 메뉴를 클릭하면 나 자신을 닫고 끝남 
      * 열린 메뉴, 닫힌 메뉴를 구분하는 방법 -- open 있으면 열린메뉴, 없으면 닫힌메뉴
      * 모바일 버전 1차 메뉴의 a 링크는 삭제 (pc 버전에서는 1차메뉴 누르면 2차 메뉴 첫번째 링크로 바로 가므로 모바일 버전에서만 적용) */
     $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click',function(e){
		if (device_status == 'mobile'){ //모바일일 때만 적용
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */ 
            if($(this).parent().hasClass('open') == true){ //열려있는 메뉴를 다시 클릭했을 때, 
                // console.log('열림')
                $(this).parent().removeClass('open') //li에 open 클래스 삭제
                $(this).next().slideUp() 
            }else{ //열려있는 메뉴가 아닌 다른 메뉴를 여는 것 (닫힌메뉴)
                // console.log('닫힘')
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open') //모든 li의 open을 삭제
                //display block이 자동으로 형성되서 다른 버튼을 눌렀을 떄 닫히지 않음. 이때 아래 명령을 줘야함
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp() //모든 2차메뉴 닫기
                $(this).parent().addClass('open')
                $(this).next().slideDown() //2차메뉴 슬라이드로 열기
            }
        }
	});
     /****************** 끝 : 모바일버전 1차 메뉴 **************** */
      /****************** 시작 : 모바일버전 1차 메뉴 ****************
       * 열기를 클릭하면 header에 menu_mo class 추가 
       * header .gnb .gnb_open
       * 닫기를 클릭하면 header에 menu_mo 클래스 삭제
       * header .gnb .gnb_wrap .gnb_close
       */
      $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_mo')
      })
      $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_mo')
      })
    /****************** 끝 : 모바일버전 1차 메뉴 ****************/
    /****************** 시작 : 스크롤시 header에 fixed ***************
     * pc/mobile 둘 다..
     * 스크롤이 조금만 되도 header에 fixed 클래스를 줌 
     * 다시 맨 꼭대기로 올라가면 header에 fixed 클래스를 삭제
    */

    let scrolling //스크롤된값
    function scroll_chk(){
        scrolling = $(window).scrollTop() //현재 스크롤값
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
    scroll_chk() //문서가 로딩 되자마자 단 1번 실행
    $(window).scroll(function(){ 
        scroll_chk() // 스크롤 될 때마다 1번씩 실행
    }) 
    //test 할때는 html 에서 fixed를 지워야한다. 
    /****************** 끝 : 스크롤시 header에 fixed ****************/
     /****************** 시작 : 찾습니다 swiper ****************/
     const find1_swiper = new Swiper('.find .item1 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            400: {    /* 640px 이상일때 적용 */
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 16,
            },
            769: {    /* 640px 이상일때 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
            1025: {    /* 640px 이상일때 적용 */
                slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.find .item1 .next',
            prevEl: '.find .item1 .prev',
        },
        
    });
     const find2_swiper = new Swiper('.find .item2 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            400: {    /* 640px 이상일때 적용 */
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 16,
            },
            769: {    /* 640px 이상일때 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
            1025: {    /* 640px 이상일때 적용 */
                slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.find .item2 .next',
            prevEl: '.find .item2 .prev',
        },
        
    });
     /****************** 끝 : 찾습니다 swiper ****************/
      /****************** 시작 : 찾습니다 tab ***************
       * .find .tab_list ul li 를 클릭하면 첫 번째를 클릭하면 active 클래스를 주고
       * li에서 어떤 tab_item을 보이게 해야하는지 단서를 줘야함
       * .find .tab_content .tab_item 에서 1번째 요소에 active클래스를 줌 
       * 
      */
        let tab_name //10월 20일 10시 20분
        $('.find .tab_list ul li').on('click', function(){
            //클릭한 li에만 active클래스 추가
            $('.find .tab_list ul li').removeClass('active')
            // console.log($(this).attr('data-tab'))
            $(this).addClass('active')
            //클릭한 li의 button에다가 선택됨이라고 글자쓰기
            $('.find .tab_list ul li button span').text('')
            $(this).find('button span').text('선택됨')
            //클릭한 li와 관련된 tab_content tab_item에 active클래스 추가
            tab_name = $(this).attr('data-tab')
            //console.log(tab_name)
            $('.find .tab_content .tab_item ').removeClass('active')
            //find로 찾을때는 클래스명이면 .이 추가되어야함, 내가 가져온 이름은 .이 없음
            $('.find .tab_content').find('.' + tab_name).addClass('active')
            //선택됨 tab_item의 title에만 '선택됨'이라고 써주기
            $('.find .tab_content .tab_item').attr('title','')
            $('.find .tab_content').find('.' + tab_name).attr('title','선택됨')
        })

        
      /****************** 끝 : 찾습니다 tab ****************/
      /****************** 시작 : 입양 swiper ****************/
      const adopt_swiper = new Swiper('.adopt .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 640px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
                centeredSlides: true,
            },
        },
         /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
      /****************** 끝 : 입양 swiper ****************/
})//