/*const getElement = (selector) => {
  const element = document.querySelector(selector)
  if (element) return element
  throw Error("element does not exist")
}*/

let myName = 'OlaOluwalekan';
console.log(myName);

function showName() {
  alert('My name is ' + myName);
  document.getElementById('paraName').innerHTML = 'my name is <span id=name>' + myName + '</span>'
}
/*const btn = getElement('.showame');

btn.addEventListener('click', () => {
  alert('My Name is ' + myName);
});*/