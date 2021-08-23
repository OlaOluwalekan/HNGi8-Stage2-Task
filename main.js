const getElement = (selector) => {
  const element = document.querySelector(selector)
  if (element) return element
  throw Error("element does not exist")
}

const link = getElement(".menu-items");
const increase = getElement(".summary-div");
const openNav = getElement(".nav-bar");

let navIcon = '&#9776';
document.getElementById('navBar').innerHTML = navIcon;

openNav.addEventListener("click", () => {
  link.classList.toggle("show-links");
  increase.classList.toggle("increase-padding");
  if(navIcon == '&#9776') {
    navIcon = '&times'
    document.getElementById('navBar').innerHTML = navIcon;
  } else {
    navIcon = '&#9776'
    document.getElementById('navBar').innerHTML = navIcon;
  }
});

const showPro = getElement(".para-pro");
const showProPara = getElement(".fa-caret-down");
let icon = 0;

showProPara.addEventListener("click", () => {
  showPro.classList.toggle("show-para-pro")
  if (icon == 0) {
    document.querySelector('.fa-caret-down').style.transform = 'rotate(180deg)';
    icon = 1;
  } else {
    document.querySelector('.fa-caret-down').style.transform = 'rotate(0deg)';
    icon = 0;
  }
});

const showObj = getElement(".para-obj");
const showObjPara = getElement(".fa2");
let icon2 = 0;

showObjPara.addEventListener("click", () => {
  showObj.classList.toggle("show-para-pro")
  if (icon2 == 0) {
    document.querySelector('.fa2').style.transform = 'rotate(180deg)';
    icon2 = 1;
  } else {
    document.querySelector('.fa2').style.transform = 'rotate(0deg)';
    icon2 = 0;
  }
});

const show = getElement(".show-para1");
const showMore = getElement(".edu-list-span1");
let changeText = 0;

showMore.addEventListener("click", () => {
  show.classList.toggle("show-more1")
  if(changeText == 0) {
    document.getElementById('eduListSpan1').innerHTML = 'show less';
    changeText = 1;
  } else {
    document.getElementById('eduListSpan1').innerHTML = 'show more';
    changeText = 0;
  }
});

const show2 = getElement(".show-para2");
const showMore2 = getElement(".edu-list-span2");
let changeText2 = 0;

showMore2.addEventListener("click", () => {
  show2.classList.toggle("show-more2")
  if (changeText2 == 0) {
    document.getElementById('eduListSpan2').innerHTML = 'show less';
    changeText2 = 1;
  } else {
    document.getElementById('eduListSpan2').innerHTML = 'show more';
    changeText2 = 0;
  }
});

const show3 = getElement(".show-para3");
const showMore3 = getElement(".edu-list-span3");
let changeText3 = 0;

showMore3.addEventListener("click", () => {
  show3.classList.toggle("show-more3")
  if (changeText3 == 0) {
    document.getElementById('eduListSpan3').innerHTML = 'show less';
    changeText3 = 1;
  } else {
    document.getElementById('eduListSpan3').innerHTML = 'show more';
    changeText3 = 0;
  }
});

const expShow = getElement(".exp-show-para1");
const expShowMore = getElement(".exp-list-span1");
let expChangeText = 0;

expShowMore.addEventListener("click", () => {
  expShow.classList.toggle("exp-show-more1")
  if (expChangeText == 0) {
    document.getElementById('expListSpan1').innerHTML = 'show less';
    expChangeText = 1;
  } else {
    document.getElementById('expListSpan1').innerHTML = 'show more';
    expChangeText = 0;
  }
});

const expShow2 = getElement(".exp-show-para2");
const expShowMore2 = getElement(".exp-list-span2");
let expChangeText2 = 0;

expShowMore2.addEventListener("click", () => {
  expShow2.classList.toggle("exp-show-more2")
  if (expChangeText2 == 0) {
    document.getElementById('expListSpan2').innerHTML = 'show less';
    expChangeText = 2;
  } else {
    document.getElementById('expListSpan2').innerHTML = 'show more';
    expChangeText2 = 0;
  }
});

const expShow3 = getElement(".exp-show-para3");
const expShowMore3 = getElement(".exp-list-span3");
let expChangeText3 = 0;

expShowMore3.addEventListener("click", () => {
  expShow3.classList.toggle("exp-show-more3")
  if (expChangeText3 == 0) {
    document.getElementById('expListSpan3').innerHTML = 'show less';
    expChangeText3 = 1;
  } else {
    document.getElementById('expListSpan3').innerHTML = 'show more';
    expChangeText3 = 0;
  }
});

const expShow4 = getElement(".exp-show-para4");
const expShowMore4 = getElement(".exp-list-span4");
let expChangeText4 = 0;

expShowMore4.addEventListener("click", () => {
  expShow4.classList.toggle("exp-show-more4")
  if (expChangeText4 == 0) {
    document.getElementById('expListSpan2').innerHTML = 'show less';
    expChangeText4 = 1;
  } else {
    document.getElementById('expListSpan4').innerHTML = 'show more';
    expChangeText4 = 0;
  }
});

const expShow5 = getElement(".exp-show-para5");
const expShowMore5 = getElement(".exp-list-span5");
let expChangeText5 = 0;

expShowMore5.addEventListener("click", () => {
  expShow5.classList.toggle("exp-show-more5")
  if (expChangeText5 == 0) {
    document.getElementById('expListSpan5').innerHTML = 'show less';
    expChangeText5 = 1;
  } else {
    document.getElementById('expListSpan5').innerHTML = 'show more';
    expChangeText5 = 0;
  }
});

const expShow6 = getElement(".exp-show-para6");
const expShowMore6 = getElement(".exp-list-span6");
let expChangeText6 = 0;

expShowMore6.addEventListener("click", () => {
  expShow6.classList.toggle("exp-show-more6")
  if (expChangeText6 == 0) {
    document.getElementById('expListSpan6').innerHTML = 'show less';
    expChangeText6 = 1;
  } else {
    document.getElementById('expListSpan6').innerHTML = 'show more';
    expChangeText6 = 0;
  }
});

const expShow7 = getElement(".exp-show-para7");
const expShowMore7 = getElement(".exp-list-span7");
let expChangeText7 = 0;

expShowMore7.addEventListener("click", () => {
  expShow7.classList.toggle("exp-show-more7")
  if (expChangeText7 == 0) {
    document.getElementById('expListSpan7').innerHTML = 'show less';
    expChangeText7 = 1;
  } else {
    document.getElementById('expListSpan7').innerHTML = 'show more';
    expChangeText7 = 0;
  }
});