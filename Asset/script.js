function memerahkan(e){
    if(e.val()!='' || e.val()){
        e.css({'border-color':'#ebebeb'})
    }else{
        e.css(e.css({ 'border-color': 'red' }))
    }
}
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
    $('.jendelaDiskusi').css({
        'left': -$(window).width()
    })
    $('.layarGelapDiskusi').css({
        'top': $(window).height()
    })
    $(window).resize(()=>{
        $('.jendelaDiskusi').css({
            'left': -$(window).width()
        })
        $('.layarGelapDiskusi').css({
            'top': $(window).height()
        })
    });
    $('.tombolClose').click(()=>{
        $('.jendelaDiskusi').animate({
            "left": -$(window).width()
        },{
            duration:400,
            complete:()=>{
                $('.layarGelapDiskusi').animate({
                    'top': $(window).height()
                },400)
            }
        })
    })
    $('#tombolDiskusi').click(()=>{
        console.log('saya')
        $('.layarGelapDiskusi').animate({
            "top": 0
        }, {
            duration: 400,
            complete: () => {
                $('.jendelaDiskusi').animate({
                    'left': 0
                }, 400)
            }
        })
    })
    $('.layarGelapDiskusi').click(() => {
        $('.jendelaDiskusi').animate({
            "left": -$(window).width()
        }, {
                duration: 400,
                complete: () => {
                    $('.layarGelapDiskusi').animate({
                        'top': $(window).height()
                    }, 400)
                }
            })
    })
    $('.namaUser').keydown(()=>{
        memerahkan($('.namaUser'));
    }).keyup(()=>{
        memerahkan($('.namaUser'));
    })
    $('.isiPesanUser').keydown(() => {
        memerahkan($('.isiPesanUser'));
    }).keyup(() => {
        memerahkan($('.isiPesanUser'));
    })
})