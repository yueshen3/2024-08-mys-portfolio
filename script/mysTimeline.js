import {dataScalerUnit} from './mysData.js';
import {dataStartYear} from './mysData.js';
import {dataEndYear} from './mysData.js';

const arrayYears = [];
let recordYear = dataStartYear;
for (let i = 0; i <= dataEndYear - dataStartYear; i++) {
  arrayYears[i] = recordYear.toString();
  recordYear ++;
}

const yearLength = 12 * dataScalerUnit;
let domTime = '';
arrayYears.forEach((e, i) => {
  domTime += `<p>${e}</p>`;
})
document.querySelector('.all-years').innerHTML = domTime;

const listHeight = document.body.clientHeight;
const listWidth = document.body.clientWidth;

let startPointX = 0;
let htmlSvgVertical = [];
for (let i = 0; i <= dataEndYear - dataStartYear; i++) {
  const e = `<line x1="${startPointX}" y1="0" 
  x2="${startPointX}" y2="${listHeight}"/>`;
  startPointX += yearLength;
  htmlSvgVertical[i] = e;
}

// const htmlSvgHorizontal = `<line x1="0" y1="1" x2="${listWidth}" y2="1" 
// style = "stroke-width: 2;"/>`
document.querySelector('.svg-lines').innerHTML = htmlSvgVertical;
document.querySelector('.svg-lines').setAttribute("height", listHeight);
document.getElementById('wrapper-all').style.width = `${listWidth}px`;
document.getElementById('wrapper-all').style.height = `${listHeight}px`;
document.querySelector(".all-years").style.width = `${startPointX}px`;
// document.querySelector('.wrapper-all').setAttribute("height", listHeight);

// document.body.style.height = listHeight + "px";
// document.body.style.width = listWidth + "px";
