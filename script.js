let bar = document.querySelector('#bar');
let box = document.querySelector('.box');
let icon = document.querySelector('.icon');
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const totalSlides = document.querySelectorAll('.slide').length;

bar.addEventListener('click', () => {
  let closeBtn = document.createElement('button');
  closeBtn.innerText = 'X';
  closeBtn.classList.add('close--btn');
  box.setAttribute('style', "display:block;");
  bar.setAttribute('style', "display:none;");
  icon.appendChild(closeBtn);
  boxclose(closeBtn);
});

function boxclose(closeBtn) {
  closeBtn.addEventListener('click', () => {
    box.setAttribute('style', "display:none;");
    closeBtn.setAttribute('style', "display:none;");
    bar.setAttribute('style', "display:block;");
  });
}

let backImgs = document.querySelectorAll('#Collection');
let idx = 0;



function handleKeyDown(event) {
  if (idx > backImgs.length) {
    idx = backImgs.length;
  } else if (idx < 0) {
    idx = 0;
  }
  if (event.key === 'ArrowDown') {
   
     
      backImgs[idx].classList.add('top');
      backImgs[idx].classList.remove('down');
      idx++;
    


  } else if (event.key === 'ArrowUp') {

  
      console.log(backImgs[idx])
      idx--;
      backImgs[idx].classList.add('down');
      backImgs[idx].classList.remove('top');
 

  } else if (event.key === 'ArrowRight') {

    showSlide(currentSlide + 1);

  } else if (event.key === 'ArrowLeft') {
    showSlide(currentSlide - 1);
  }


  else {

  }

}
function downUp(srcImg) {
  let men = 8;
  let child = 14;
  let women = 1
  let perfume = 20;
  let n = 0;
  if (srcImg == 'img2') {

    backImgs.forEach(img => {

      img.setAttribute('class', `background-section${men}`);
      men++;
    });
  } else if (srcImg == 'img3') {

    backImgs.forEach(img => {

      img.setAttribute('class', `background-section${child}`);
      child++;


    });

  } else if (srcImg == 'img4') {

    backImgs[n].setAttribute('class', `background-section${perfume}`);
    perfume++;
   

  } else {

    backImgs.forEach(img => {

      img.setAttribute('class', `background-section${women}`);
      women++;


    });

  }

}

document.addEventListener('keydown', handleKeyDown);


window.addEventListener('scroll', () => {
  const position = window.scrollX;
  handleKeyDown(position)



});

let div = document.querySelector('.inputDisplay');
div.addEventListener('click', () => {
  window.location.href = 'Searchengine.html';

})

let Login = document.querySelector('.Log-in');

Login.addEventListener('click', () => {

  window.location.href = 'login.html';
});

let currentSlide = 0;

function showSlide(index) {

  if (index >= totalSlides) {
    currentSlide = 0;

  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  let srcImg = slide[currentSlide].getAttribute('id');
  downUp(srcImg);
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}


