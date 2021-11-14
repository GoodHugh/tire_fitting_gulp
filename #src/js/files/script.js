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
let checkClick = 0;

function one_click(){
    sliderItems.forEach((elem, item) => {
        if (item < 10) {
            sliderItems[item].classList.add('slide_active');
            checkClick++;
        }
    })
}
one_click();

sliderBtnNext.addEventListener('click', (() => {
    if (checkClick >= 10 && checkClick !=  length_sliderItems) {
        sliderItems[checkClick - 10].classList.remove('slide_active');
        sliderItems[checkClick].classList.add('slide_active');
    }
    if (length_sliderItems - checkClick > 10) {
            sliderItems[checkClick].classList.add('slide_active');
    }
    if (checkClick < length_sliderItems){
        checkClick++;
    }
}))

sliderBtnPrev.addEventListener('click', (() => {
    if(checkClick > 10){
        checkClick--;
    }
    if (checkClick >= 10) {
        sliderItems[checkClick - 10].classList.add('slide_active');
        sliderItems[checkClick].classList.remove('slide_active');
        
    }
}))


