const btn = document.getElementById('btn');
const menu = document.getElementById('menu');
const linksBtn = document.querySelectorAll('.menu__item');
const links = document.querySelectorAll('.menu__link');
const cover = document.querySelector('.cover');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.toggle('open');
  btn.classList.toggle('active');
  cover.classList.toggle('show')

  // cover.classList.toggle('show')

})


links.forEach((el) => {
  el.addEventListener('click', function (e) {
    const targetId = e.target.innerText.toLowerCase();
    const targetParent = e.target.parentElement;
    btn.classList.toggle('active');
    menu.classList.toggle('open');
    cover.classList.remove('show');
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    linksBtn.forEach((el) => {
      el.classList.remove('active')
      targetParent.classList.add('active');
    })
  })

})


