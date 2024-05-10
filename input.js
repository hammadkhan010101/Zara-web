let bar = document.querySelector('#bar');
let box = document.querySelector('.box');
let icon = document.querySelector('.icon');
console.log('hello')
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


let Login = document.querySelector('.Log-in');


Login.addEventListener('click',()=>{

  window.location.href = 'login.html';
})