document.addEventListener('DOMContentLoaded', function() {
    let brandsList = document.querySelector('.brands__list');
    let brandsItems = brandsList.children;
    let brandItem = document.querySelector('.brands__item');
    
    for (let i = 1; i <= 7; i++ ) {
        let brandItemDuplicate = brandItem.cloneNode(true);
        let brandLogo = brandItemDuplicate.querySelector('.brands__logo');
        let brandLogoSrc = brandLogo.src;
        
        brandsList.appendChild(brandItemDuplicate);
        console.log(brandLogoSrc);
    }
});