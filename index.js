document.getElementById('main').remove();
const newHeader = document.createElement("h1");
newHeader.setAttribute('id', "victory");
newHeader.textContent = "YOUR-NAME is the champion";
document.getElementsByTagName('body')[0].appendChild(newHeader);