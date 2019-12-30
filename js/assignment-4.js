var list = document.getElementsById('selector')[0];
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('DVS');

newItemLast.appendChild(newTextLast);
list.appendChild(newTextLast);
