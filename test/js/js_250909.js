
$(document).ready(function(){// jquery는 클래스를 주고 빼고 하는 역할을 해준다.
console.log('1111111111')
$('.box').on('mouseenter', function(){
    console.log('오버했다!!!')
    $('.box').addClass('on')
})
$('.box').on('mouseleave', function(){
    console.log('내려갔다!!')
    $('.box').removeClass('on')
})
})//$(document).ready 


console.log('2연결되었습니다.')
///html/css-큰따옴표 , js 작은 따옴표 하나로 쓸거라면 다 큰따옴표로 써야 한다.
