document.addEventListener('DOMContentLoaded', function () {
    let brandsList = document.querySelector('.brands__list');
    let brandsItems = brandsList.children;
    let brandItem = document.querySelector('.brands__item');
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
    setSliderItems(7);

    showMoreBtn.addEventListener('click', function () {
        if (!showMoreBtn.classList.contains('show-more-btn--active')) {
            showMoreBtn.textContent = 'Скрыть';
            showMoreBtn.classList.add('show-more-btn--active');
            numOfElems = brandsItems.length + 2;
            setSliderItems(numOfElems);
        } else {
            showMoreBtn.textContent = showMoreBtnText;
            showMoreBtn.classList.remove('show-more-btn--active');
            let itemsToDisplay = brandsItems.length - 3;
            console.log(itemsToDisplay);
            for (let j = brandsItems.length; j = itemsToDisplay; j - 1) {
                console.log(j);
                brandsItems[j].remove();
                console.log(brandsItems[j]);
            }
        }
    });
});