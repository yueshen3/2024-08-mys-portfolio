const buttons = document.querySelectorAll('button');
const sections = document.querySelectorAll('section');

function addClassName(p) {
  sections[p].classList.add('after');
}
function removeClassName(p) {
  sections[p].classList.remove('after');
}

buttons.forEach(function(id, index){
  id.addEventListener('touchstart', (e) => {
    addClassName(index);
    console.log(index);
    e.stopPropagation();
  })
  id.addEventListener('mousedown', (e) => {
    addClassName(index);
    console.log(index);
    e.stopPropagation();
  })
})

sections.forEach(function(id, index){
  document.addEventListener('touchstart', (e) => {
    removeClassName(index);
  })
  document.addEventListener('mousedown', (e) => {
    removeClassName(index);
  });
})