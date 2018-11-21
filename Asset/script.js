$(()=>{
    $('#ref1').mouseenter(()=>{
        $('#ref1 div').animate({'left':'-683px'},'fast');
    })
    $('#ref1').mouseleave(() => {
        $('#ref1 div').animate({
            'left': '0px'
        }, 'fast');
    })
    $('#ref2').mouseenter(() => {
        $('#ref2 div').animate({
            'right': '-683px'
        }, 'fast');
    })
    $('#ref2').mouseleave(() => {
        $('#ref2 div').animate({
            'right': '0px'
        }, 'fast');
    })
    $('.prevMateri').mouseenter(() => {
        $('.sebelumMateri').css({
            'color': 'black'
        })
        // console.log('saya');
    })
    $('.prevMateri').mouseleave(() => {
        $('.sebelumMateri').css({
            'color': 'rgba(100, 100, 100,.8)'
        })
    })
    $('.nextMateri').mouseenter(() => {
        $('.setelahMateri').css({
            'color': 'black'
        })
        // console.log('saya');
    })
    $('.nextMateri').mouseleave(() => {
        $('.setelahMateri').css({
            'color': 'rgba(100, 100, 100,.8)'
        })
    })
})