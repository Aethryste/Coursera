// Toggles nav dropdown.
function toggleNav() {
    let toggler_elem = document.querySelector('.navbar-toggler');
    let nav_elem = document.getElementById('nav-categories');
    let wrapper_elem = document.querySelector('.wrapper');
    if (nav_elem.classList.contains('navActivated-drop')) {
        toggler_elem.classList.remove('navActivated-icon')
        nav_elem.classList.remove('navActivated-drop');
        wrapper_elem.classList.remove('navActivated-drop');
    } else {
        toggler_elem.classList.add('navActivated-icon')
        nav_elem.classList.add('navActivated-drop');
        wrapper_elem.classList.add('navActivated-drop');
    }
}
