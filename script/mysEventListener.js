const mysIcon = document.querySelector('.nav-icon');
const navList = document.querySelector('.nav-list');

function changeDisplay (p) {
  navList.style.display = p;
}

try {
  mysIcon.addEventListener('touchend', (e) => {
    changeDisplay('flex');
    console.log(e);
    e.stopPropagation();
  })
} catch (SyntaxError) {}

try {
  mysIcon.addEventListener('mouseup', (e) => {
    changeDisplay('flex');
    console.log(e);
    e.stopPropagation();
  })
} catch (SyntaxError) {}


