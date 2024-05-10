let bar = document.querySelector('#bar');
let box = document.querySelector('.box');
let icon = document.querySelector('.icon');

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

let registar = document.querySelector('.Regi');
let loginForm = document.querySelector('.forNone');
let registarForm = document.querySelector('.registar-form');
let registerDiv = document.querySelector('.register-div');
registar.addEventListener('click',()=>{
loginForm.setAttribute('style',"display:none;")
registarForm.setAttribute('style',"display:block;")
registerDiv.setAttribute('style',"display:none;")
});