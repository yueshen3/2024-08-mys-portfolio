const time = [];
const startYear = '09';
let recordYear = startYear;
const endYear = '28';
for (let i = 0; i <= endYear - startYear; i++) {
  time[i] = recordYear;
  recordYear ++;
}

const yearWidth = 70;
const yearHeight = 30;
let paraTime = '';
time.forEach((e, i) => {
  paraTime += `<p class="the-year">${e}</p>`;
})
document.querySelector('.all-years').innerHTML = paraTime;
  
let startPointX = 20;
let timeLineMark = [];
let verticalLineHeight = 25;
for (let i = 0; i <= endYear - startYear; i++) {
  const html = `<line x1="${startPointX}" y1="0" 
  x2="${startPointX}" y2="${verticalLineHeight - 4}"/>`;
  startPointX += yearWidth;
  timeLineMark[i] = html;
}
const timeLineHori = `<line x1="1" y1="${verticalLineHeight - 6}" 
x2="${yearWidth * time.length}" y2="${verticalLineHeight - 6}"
style = "stroke-width: 6px;"/>`
document.querySelector('.svg-lines').innerHTML = timeLineMark + timeLineHori;


// console.log(timeLineMark + timeLineHori);