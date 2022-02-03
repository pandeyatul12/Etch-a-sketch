let container = document.querySelector("#container");

for(let i=0;i <16;i++){
    for(let j=0;j <i;j++){
        let columns = document.createElement('div'); 
        columns.classList.add('box');
        container.appendChild(columns);
        let rows = document.createElement('div'); 
        rows.classList.add('box');
        container.appendChild(rows);
    }
}

let classicBtn = document.querySelector("#classic-btn");
  classicBtn.addEventListener("click", classicChange);


function classicChange(){
  let boxs = document.querySelectorAll('.box');
    boxs.forEach(box =>  {
    box.style.backgroundColor = "white";
  });
    boxs.forEach(box => box.addEventListener('mouseover', function change(){
    box.style.backgroundColor = "black";
  }))
}

let eraseBtn = document.querySelector("#erase-btn");
  eraseBtn.addEventListener("click", erase);
  
function erase(){
  let boxs = document.querySelectorAll('.box');
    boxs.forEach(box =>  {
    box.style.backgroundColor = "white";
    box.addEventListener('mouseover', function change(){
    box.style.backgroundColor = "white";
    })
})}

let rainbowBtn = document.querySelector("#rainbow-btn");
  rainbowBtn.addEventListener("click", rainbowChange);

function rainbowChange(){
  let boxs = document.querySelectorAll('.box');
    boxs.forEach(box =>  {
    box.style.backgroundColor = "white";
      });
    boxs.forEach(box => box.addEventListener('mouseover', function change(){
    color = getRandomColor();
    box.style.backgroundColor = color;
      }))
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
      }
    return color;
    }