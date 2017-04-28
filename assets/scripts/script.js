document.querySelector('.navbtn').onclick = function(){
    this.classList.toggle('navbtn-close');
    document.body.classList.toggle('noscroll');
};

document.querySelector('nav').onclick = function (e) {
    let target = e.target;
    if(target.tagName !== 'H2') return;

    let parent = target.parentNode;
    parent.style.top = (!parent.style.top) ? '0' : '';

    let navbtn = document.querySelector('.navbtn');
    navbtn.hidden = !navbtn.hidden;

    parent.classList.toggle('nav_item-selected');
}
