let container = document.querySelector("#container");

for(let i=0;i <16;i++){
    for(let j=0;j <i;j++){
        let columns = document.createElement('div'); 
        columns.classList.add('columns');
        container.appendChild(columns);
        let rows = document.createElement('div'); 
        rows.classList.add('rows');
        container.appendChild(rows);
    }
}
    
const divs = document.querySelectorAll('div');
console.log(divs);
divs.forEach((div) => {
  div.style.setProperty('--div-background-color', 'skyblue');
});