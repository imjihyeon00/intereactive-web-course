window.onload = () => {
    const fullpageData = {
        pageCnt : document.querySelectorAll('.fullpage-section').length, //페이지 총 수
        curIdx : 0, //현재 페이지
        pageH : document.body.clientHeight, //브라우저 높이
        last_y : document.body.clientHeight * document.querySelectorAll('.fullpage-section').length,
        onPageOn : true,
        isScroll : false
    }

    const init = ()=>{
        setH()
    }
    
    const setH = ()=>{
        const fullpages = document.querySelectorAll('#fullpage > .fullpage-section');
        fullpageData.pageH = document.body.clientHeight;
        fullpages.forEach(page => {
            page.style.height = fullpageData.pageH;
        })
    }

    init()



    document.addEventListener('resize', ()=>{
        setH();        
    })
}