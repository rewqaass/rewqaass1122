const menuBtn=document.querySelector('.menu-btn')
const navlinks=document.querySelector('.nav-links')

menuBtn.addEventListener('click',()=>{
  navlinks.classList.toggle('mobile-menu')
})

// 滑动切换功能
let touchstartX = 0;
let touchendX = 0;

function handleGesture() {
    if (touchendX < touchstartX) next.click();
    if (touchendX > touchstartX) prev.click();
}

slider.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
});
