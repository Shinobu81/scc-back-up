    /*declare an initialize variables
    note the escape
    sequence*/
    var hello = 'Hello, how\'s your day, ';
    var name = 'Ron';
    
    //join the strings together
    var helloMessage = hello + name + '?';
    
    //get hold of the node with id of hello
    var el = document.getElementById('hello');
    
    //replace the content
    el.textContent = helloMessage;