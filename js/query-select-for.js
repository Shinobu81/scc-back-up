//query selector only returns the first match
    //var el = document.querySelector('li.hot');
    //el.className = 'cool';

//querySelector returns a NodeList
var els = document.querySelectorAll('li.hot');
//els[].className = 'cool';

//changing all class name '.hot' to '.cool'
for (var i = 0; i < els.length; i++){
    els[i].className = 'cool';
}