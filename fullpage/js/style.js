window.onload = () => {
    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        navigation: true,
        anchors:['num0', 'num1', 'num2', 'num3', 'num4'],
    });

    const body = document.querySelector('body');
    const navBtn = document.querySelector('#nav_icon');

    navBtn.addEventListener('click', ()=>{
        body.classList.toggle('nav_active')
    })
}