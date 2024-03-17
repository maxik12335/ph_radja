const modal = document.querySelector('.modal');
modal.querySelector('.close').addEventListener('click', () => {
  modal.classList.remove('show');
  document.body.style.overflow = '';
})

const images = document.querySelectorAll('.list_item__img');
images.forEach(img => {
  img.addEventListener('click', (event) => {
    let src = event.target.getAttribute('src');
    modal.querySelector('img').setAttribute('src', src);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'
  })
})