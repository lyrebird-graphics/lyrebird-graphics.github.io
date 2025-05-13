const sliderTabs = document.querySelectorAll('.slider-tab');
const sliderIndicicator = document.querySelectorAll('.slider-indicator');
const sliderControls = document.querySelectorAll('.slider-controls');


//UPDATE THE INDICATOR HEIGHT AND WIDTH
const updateIndicator = (tab, index) => {
    sliderIndicicator.style.transform =`translateX(${tab.offsetLeft - 20}px)`;
    sliderIndicicator.style.width = `${tab.getBoundingClientRect().width}px`;
 

    const scrollLeft = slideTabs[index].offsetLeft - sliderControls.offsetWidth/ 2 + slideTabs[index].offsetWidth / 2;
    sliderControls.scrolTo({ left: scrollLeft, behavior: "smooth" });
}


//INNITIALIZE SWIPER INSTANCE
const swiper = new Swiper(".slider-container", {
    effect: "coverflow",     //SWIPWE OFFERS DIFFERENET SLIDE BEFFECTS AS: cube, slide, coverflow
    speed: 1300,
    autoplay:{ delay: 3000 },
    navigation:{
        prevE1: "#slide-prev",
        nextE1: "#slide-next"
    },



    on :{
        //UPDATE INDICATOR UPON SLIDE CHANGE
        slideChange: () => {
            const currentTabIndex =[...sliderTabs].indexOf(sliderTabs[swiper.activeIndex]);
            updateIndicator(sliderTabs[swiper.activeIndex],currentTabIndex);
        },
        reachEnd: () => swiper.autoplay.stop()
    }
});


//UPDATE THE SLIDE & INDICATOR UPON TAB CLICK
sliderTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        swiper.slideTo(index);
        updateIndicator(tab, index);
    });
});


updateIndicator(sliderTabs[0], 0);
window.addEventListener("resize", () => updatePagination(sliderTabs[swiper.activeIndex], 0));