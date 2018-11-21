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
})