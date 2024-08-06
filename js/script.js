//Toogle class active, yang tadinya gk ada jadi ada
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
}
// dokument queryselector cari elemen  yang nama kelasnya navbar-nav, ketika hamburger-menu di klik cari elemen  yang nama id nya

//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
// ketika di klik dimanapun
document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
  }
})
/* bagian navbar selesai*/