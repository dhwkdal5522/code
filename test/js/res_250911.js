//console.log('연결') //첫번째 방법
    $('document').ready(function(){
        console.log('연결') //연결확인 두번째 방법

        const winner_swiper = new Swiper('.winner .swiper', { /* 팝업을 감싼는 요소의 class명 */
            slidesPerView: 'auto', /* auto : 브라우저 사이즈 줄어들때 사진 크기 유지 ,
            한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
            spaceBetween: 17, /* 팝업과 팝업 사이 여백 */
            breakpoints: {
                // 518: {    /* 640px 이상일때 적용 css와 제이쿼리가 다르므로 +1조정해줘야 함 */ 
                //     slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                //     spaceBetween: 16, //여백
                // },
                769: {    /* 640px 이상일때 적용 css와 제이쿼리가 다르므로 +1조정해줘야 함 */ 
                    slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                    spaceBetween: 24, //여백
                },
                
            },
        });
    }) //$('document').ready 


