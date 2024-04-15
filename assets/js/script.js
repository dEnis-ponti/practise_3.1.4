document.addEventListener('DOMContentLoaded', function () {
    let brandsList = document.querySelector('.brands__list');
    let brandsItems = brandsList.children;
    let brandItem = document.querySelector('.brands__item');

    for (let i = 1; i <= 7; i++) {
        let brandItemDuplicate = brandItem.cloneNode(true);


        brandsList.appendChild(brandItemDuplicate);
        console.log(brandsItems);
        let brandLogo = brandsItems[i].querySelector('.brands__logo');
        console.log(brandLogo);
        let brandLogoSrc = brandLogo.src;
        let validBrandLogoSrc = brandLogoSrc.replace('brand-1.png', 'brand-' + (i + 1) + '.png');
        console.log(validBrandLogoSrc);
        brandLogo.src = validBrandLogoSrc;
        console.log(brandsItems[i].brandLogoSrc);
        console.log(brandsItems[i]);
    }
});