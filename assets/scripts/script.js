document.querySelector('.navbtn').onclick = function(){
    this.classList.toggle('navbtn-close');
    document.body.classList.toggle('noscroll');
};

let nav = document.querySelector('nav');
nav.onclick = function (e) {
    let target = e.target;
    if(target.tagName !== 'H2') return;

    let parent = target.parentNode;
    parent.style.top = (!parent.style.top) ? '0' : '';

    nav.style.overflow = (!nav.style.overflow) ? 'hidden' : '';

    let navbtn = document.querySelector('.navbtn');
    navbtn.hidden = !navbtn.hidden;

    parent.classList.toggle('nav_item-selected');
}
