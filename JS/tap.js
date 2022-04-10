// for(let i=0;i<$('.tab-button').length;i++){

//     $('.tab-button').eq(i).on('click', function(){
//         탭열기(i)
//     })
// }

$('.list').click(function(e){
    console.log(e.target.dataset.id)
        탭열기(e.target.dataset.id)
    
    
})

function 탭열기(숫자){
        $('.tab-button').removeClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-button').eq(숫자).addClass('orange');
        $('.tab-content').eq(숫자).addClass('show');
}


// $('.tab-button').eq(1).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').eq(1).addClass('show');
// })
// $('.tab-button').eq(2).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').eq(2).addClass('show');
// })
