// get the tooltip HTMLElement
let tooltip = document.getElementsByClassName('tip')[0];
let testList = document.getElementById('TooptipList');

// add event listeners to the test list elements
for (let i = 0; i < testList.children.length; i++) {
  testList.children[i].addEventListener('mouseover', toggleTooltip);
  
  // hide tooltip when mouse not hovering

  testList.children[i].addEventListener('mouseleave', function(t){
    tooltip.style.display = 'none';
  });
}

// set tooltip configurations
function toggleTooltip(t) {
  tooltip.style.display = 'block';

  // set position
  let posX = t.target.getBoundingClientRect().x;
  let posY = t.target.getBoundingClientRect().y + t.target.getBoundingClientRect().height + 3;
  tooltip.style.left = posX + 'px';
  tooltip.style.top = posY + 'px';

  // set textContent
  let num = t.target.textContent;
  tooltip.textContent = 'This is a tooltip on ' + num;
}