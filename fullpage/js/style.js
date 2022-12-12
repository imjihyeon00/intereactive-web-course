window.onload = () => {
    const sec2_title=document.querySelector('#sec2 h1.title')
    const sec2_slide=document.querySelector('#sec2 .slider_wrap')
    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        navigation: true,
        anchors:['num0', 'num1', 'num2', 'num3', 'num4'],
        afterLoad: function(old_elem, new_elem, direction){
            if(new_elem.index === 2){
                sec2()
                console.log('section 2 hello');
            }
            if(old_elem.index === 2){
                sec2_reset()
                console.log('section 2 good bye!');
            }
        }
    });

    //section func

    function sec2() {
        sec2_title.style.cssText=`opacity:1; transform: translateX(0px);`
        sec2_slide.style.cssText=`opacity:1; transform: translateX(0px);`
    }
    function sec2_reset() {
        sec2_title.style.cssText=`opacity:0; transform: trnaslateX(-50%);`
        sec2_slide.style.cssText=`opacity:0; transform: translateX(50%);`
    }
    const body = document.querySelector('body');
    const navBtn = document.querySelector('#nav_icon');

    navBtn.addEventListener('click', ()=>{
        body.classList.toggle('nav_active')
    })
}