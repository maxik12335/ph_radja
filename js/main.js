const titles = document.querySelectorAll('.list_item__title');
const images = document.querySelectorAll('.list_item__img');
images.forEach((img, index) => {
  img.addEventListener('touchstart', (event) => {
    images.forEach(img => {
      if(img.classList.contains('active') && titles[index].classList.contains('active')) {
        img.classList.remove('active')
        titles[index].classList.remove('active')
      }
    })

    img.classList.add('active');
    titles[index].classList.add('active')
  })
})

images.forEach((img, index) => {
  img.addEventListener('touchmove', (event) => {
    images.forEach(img => {
      if(img.classList.contains('active') && titles[index].classList.contains('active')) {
        img.classList.remove('active')
        titles[index].classList.remove('active')
      }
    })

    img.classList.add('active');
    titles[index].classList.add('active')
  })
})