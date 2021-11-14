// tabs ==================================================================
const tabsBtn = document.querySelectorAll('._tabs_nav-btn');
const tabsList = document.querySelectorAll('.page__tab-body-list');

tabsBtn.forEach(onTabsClick);

function onTabsClick(item) {
    item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('_tabs_nav-btn-active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('_tabs_nav-btn-active');
            });
            tabsList.forEach(function (item) {
                item.classList.remove('tab_vctive');
            });
            currentBtn.classList.add('_tabs_nav-btn-active');
            currentTab.classList.add('tab_vctive');
        }
    });
};
document.querySelector('._tabs_nav-btn').click();

// tabs ==================================================================

//slider ===================================================================

const sliderItems = document.querySelectorAll('.page__partners-body-slider-item');
const sliderBtnNext = document.querySelector('.page__partners-body-slider-next');
const sliderBtnPrev = document.querySelector('.page__partners-body-slider-prev');
let length_sliderItems = sliderItems.length;
let checkClicl = 0;


sliderBtnNext.addEventListener('click', (() => {
    if (checkClicl >= 10 && checkClicl !=  sliderItems.length) {
        sliderItems[checkClicl - 10].style.display = 'none';
        sliderItems[checkClicl].style.display = 'inline-block';
    }
    if (length_sliderItems - checkClicl > 10) {
            sliderItems[checkClicl].style.display = 'inline-block';
    }
    if (checkClicl < sliderItems.length){
        checkClicl++;
    }
    console.log(checkClicl);
}))
console.log("!!!!");