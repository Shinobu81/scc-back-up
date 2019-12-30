function Movie(name, stock, preorder){
    this.name = name;
    this.totalStock = stock;
    this.preorder = preorder;
    this.checkForSale = function(){
        return this.totalStock - this.preorder;
    };
}

var movie1 = new Movie('Redline', 60, 35);
var movie2 = new Movie('Summer Wars', 65, 20);
var movie3 = new Movie('Short Peace', 60, 25);

//update the html for the page
var details1 = movie1.name + ' - pre-ordered: ';
details1 += movie1.checkForSale();

var elMovie1 = document.getElementById('movie1');
elMovie1.textContent = details1;

var details2 = movie2.name + ' - pre-ordered: ';
details2 += movie2.checkForSale();

var elMovie2 = document.getElementById('movie2');
elMovie2.textContent = details2;

var details3 = movie3.name + ' - pre-ordered: ';
details3 += movie3.checkForSale();

var elMovie3 = document.getElementById('movie3');
elMovie3.textContent = details3;
