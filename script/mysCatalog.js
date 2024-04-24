const fileName = [
  "0001",
  "0108",
  "0112",
  "0113",
  "0114",
  "0202",
  "0206",
  "0301",
  "0302",
  "0303",
  "0304",
  "0306",
  "0504",
  "0505", 
  "0511", 
  "0512", 
  "0513", 
  "0514", 
]

let divInitial = `<div id="icover"><img src="images/M_YS_cover.png"></div>`;
let divElementList = '';
for (let i = 0; i < fileName.length; i++) {
  const name = fileName[i];
  const html = `<button id="b${name}"></button>
<div class="image" id="i${name}"><img src="images/M_YS_${name}.png"></div>`;
  divElementList += html;
}
document.querySelector('.wrapper').innerHTML = divInitial + divElementList;

console.log(divElementList);