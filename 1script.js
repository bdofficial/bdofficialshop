var viewMode = getCookie("view-mode");
if (viewMode == "desktop") {
  viewport.setAttribute('content', 'width=1024');
} else if (viewMode == "mobile") {
  viewport.setAttribute('content', 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no');
}

const navItems = document.getElementsByClassName('nav-item');

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', () => {
    for (let j = 0; j < navItems.length; j++)
      navItems[j].classList.remove('active');

    navItems[i].classList.add('active');
  });
}