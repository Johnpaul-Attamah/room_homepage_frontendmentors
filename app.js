(() => {
    /***********************
     * mobile navigation****
     ***********************/

    const nav = document.querySelector('.main__header--nav');
    const navClose = nav.querySelector('.main__header--nav-close');
    const navOpen =  document.querySelector('.nav--open');
    const bgOverlay = document.querySelector('.overlay');

    navClose.addEventListener('click', () => {
        nav.classList.toggle('open');
        bgOverlay.classList.remove('visible');

        //Restore body
        document.body.style.overflow = 'auto';
    })

    navOpen.addEventListener('click', () => {
        nav.classList.toggle('open');
        bgOverlay.classList.add('visible');
        
        //prevent body from scrolling
        document.body.style.overflow = 'hidden';
    })

    window.addEventListener('resize', () => {
        if(window.innerWidth > 1300) {
            if(nav.classList.contains('open')) {
                bgOverlay.classList.remove('visible');
                document.body.style.overflow = 'auto';
            }
        }
    })
})();

/***********************
 * Carousel control*****
 ***********************/

(() => {
    const header = document.querySelector('.main__header'),
        nextBtn = document.querySelector('.carousel__control .next'),
        prevBtn = document.querySelector('.carousel__control .prev');

    let mobileImages = 
    header.querySelector('.header__img img').getAttribute('data-carousel-mobile'),
    desktopImages = header.querySelector('.header__img img').getAttribute('data-carousel-desktop'),
    index = 0;

    //convert to array
    mobileImages = mobileImages.split(',');
    desktopImages = desktopImages.split(',');
    
    //activate carousels
    nextBtn.addEventListener('click', () => {
        if(index === mobileImages.length - 1) {
            index = 0;
        } else {
            index++;
        }
        addImage();
    })

    prevBtn.addEventListener('click', () => {
        if(index === 0) {
            index = mobileImages.length -1;
        } else {
            index--;
        }
        addImage();
    })

     //add images
    function addImage() {
        const dskImgSrc = desktopImages[index];
        const mbImgSrc = mobileImages[index];
        const headerImg = header.querySelector('.header__img img');
        headerImg.srcset = `${mbImgSrc} 375w, ${dskImgSrc} 840w`;
        headerImg.src = dskImgSrc;
    }

})();