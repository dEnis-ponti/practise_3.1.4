document.addEventListener('DOMContentLoaded', function () {
    let brandsSlider = document.querySelector('.brands__slider')
    let brandsList = document.querySelector('.brands__list');
    let brandsItems = brandsList.children;
    let brandItemTemplate = document.querySelector('#brand-template').content;
    let brandItem = brandItemTemplate.querySelector('.brands__item');
    let showMoreBtn = document.querySelector('.show-more-btn');
    let showMoreBtnText = showMoreBtn.textContent;

    let setSliderItems = function (numOfElems) {
        for (let i = brandsItems.length; i <= numOfElems; i++) {
            let brandItemDuplicate = brandItem.cloneNode(true);
            brandsList.appendChild(brandItemDuplicate);
            let brandLogo = brandsItems[i].querySelector('.brands__logo');
            let brandLogoSrc = brandLogo.src;
            let validBrandLogoSrc = brandLogoSrc.replace('brand-1.png', 'brand-' + (i + 1) + '.png');
            brandLogo.src = validBrandLogoSrc;
        }
    };

    let adjustSliderItems = function () {
        let screenWidth = window.innerWidth;
        if (screenWidth >= 1120) {
            setSliderItems(8);
        } else if (screenWidth >= 768) {
            setSliderItems(6);
        } else {
            setSliderItems(9)
        }
    }
    adjustSliderItems();
    window.addEventListener('resize', adjustSliderItems);

    let initializeSwiper = function () {

        let screenWidth = window.innerWidth;
        if (screenWidth < 768) {

            brandsSlider.classList.add('swiper', 'mySwiper');
            brandsList.classList.add('swiper-wrapper');
            for (let i = 0; i < brandsItems.length; i++) {
                brandsItems[i].classList.add('swiper-slide');
            }
            console.log('swiper is initialized');
            const swiper = new Swiper('.mySwiper', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },

            });
        } else if (screenWidth >= 768) {
            brandsSlider.classList.remove('swiper', 'mySwiper');
            brandsList.classList.remove('swiper-wrapper');
            for (let i = 0; i < brandsItems.length; i++) {
                brandsItems[i].classList.remove('swiper-slide');
            }

        }
    }
    window.addEventListener('resize', initializeSwiper);

    showMoreBtn.addEventListener('click', function () {
        if (!showMoreBtn.classList.contains('show-more-btn--active')) {
            showMoreBtn.textContent = 'Скрыть';
            showMoreBtn.classList.add('show-more-btn--active');
            let numOfElems = brandsItems.length + 2;
            setSliderItems(numOfElems);
        } else {
            showMoreBtn.textContent = showMoreBtnText;
            showMoreBtn.classList.remove('show-more-btn--active');
            let itemsToDisplay = brandsItems.length - 3;
            console.log(itemsToDisplay);
            for (let j = brandsItems.length; j = itemsToDisplay; j--) {
                if (brandsItems[j] != undefined) {
                    brandsItems[j].remove();
                } else {
                    break;
                }
            }
        }
    });
});