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

const slideItems = document.getElementById('slider_items');
const slideCollection = document.querySelectorAll('.page__partners-body-slider-item');
const sliderItem = document.querySelector('.page__partners-body-slider-item');
const sliderWrapp = document.querySelector('.page__partners-body-slider-wrapp');
const btn_next = document.querySelector('#btn_next');
const btn_prev = document.querySelector('#btn_prev');
const slidewidth = sliderWrapp.getBoundingClientRect();
const slideItems_position = slideItems.getBoundingClientRect();

let slider_length = 0;

let calcslidewidth = slideCollection.length * slidewidth.width - slidewidth.width * 5;

btn_next.addEventListener('click', (() => {
    if (slider_length < calcslidewidth) {
        slider_length += slidewidth.width;
        slideItems.style.left = -slider_length + "px";
    } else slider_length += slidewidth.width;
    if (slider_length > calcslidewidth) {
        slideItems.style.left = 0 + "px";
        slider_length = 0;
    }
}))

btn_prev.addEventListener('click', (() => {
    if (slider_length <= calcslidewidth && slider_length > 0) {
        slider_length -= slidewidth.width;
        slideItems.style.left = -slider_length + "px";
    }
}))

//=====================================================================================
//плавная прокрутка

document.querySelectorAll('.menu-header__link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const menu_href = this.getAttribute('href').substring(1);
        const scroll_block = document.getElementById(menu_href);
        const topScroll = 0;
        const elemPosition = scroll_block.getBoundingClientRect().top;
        const offsetPosition = elemPosition - topScroll;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
        })
    })
})
//=====================================================================================