class onePage {
    constructor() {
        /*
        *   pages = fullpage로 등록한 section들
        *   pagesCnt = section의 총 갯수 
        *   currentPage = 현재 페이지
        *   isScroll = 스크롤 작동중 여부
        *   clientHeight = 브라우저 높아
        *   fullPageHeight = 전체 페이지 높이
        */
        this.pages = document.querySelectorAll('#fullpage > .fullpage-section')
        this.pagesCnt = document.querySelectorAll('#fullpage > .fullpage-section').length;
        this.currentPage = 0;
        this.isScroll = false;
        this.clientHeight = document.body.clientHeight;
        this.fullPageHeight = document.body.clientHeight * document.querySelectorAll('.fullpage-section').length

        this.init()
    }

    init () {
        this.pages.forEach((page, idx) => {
            page.style.cssText = `z-index: ${idx+1};`
            page.classList.remove('active');
            if(this.currentPage == idx) {
                page.classList.add('active');
            }
        })

        this.setResizeHeight();
    }

    // 화면 크기 변경에 따른 높이 조정
    setResizeHeight () {
        this.clientHeight = document.body.clientHeight;
        this.pages.forEach(page => {
            page.style.cssText = `height: ${this.clientHeight}px;`;
            console.log(page.style.height);
        })
    }

    //스크롤 이벤트 
    nextPage(){
        console.log('up');
        if(this.currentPage == 0) return;
        this.currentPage -= 1;
        this.pages.forEach((page, idx) => {
            page.classList.remove('active');
            if(this.currentPage == idx) {
                page.classList.add('active');
            }
        })
    }
    prevPage(){
        console.log('down');
        if(this.currentPage == this.pagesCnt-1) return;
        this.currentPage += 1;
        this.pages.forEach((page, idx) => {
            page.classList.remove('active');
            if(this.currentPage == idx) {
                page.classList.add('active');
            }
        })
    }
}


window.onload = () => {
    const fullpage = new onePage();


    //Events
    window.addEventListener("resize", ()=>{
        fullpage.setResizeHeight();
    })

    window.addEventListener("wheel", (event)=>{
        if(event.deltaY < 0){
            fullpage.nextPage();
        } else {
            fullpage.prevPage();
        }
    })

}