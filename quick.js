
var form = function(params) {    
    // file:(url), post:(params), then:(afterFunction)
    
    var doneFunction = function() {
        params.then(this.responseText);
    }
    
    var http = new XMLHttpRequest();    
    http.addEventListener("load", doneFunction);
    http.open("POST", params.file);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    var prms = ""; for (const prop in params.post) {
        prms += prop + "=" + params.post[prop] + "&";
    }

    http.send(prms);
}

var attach = function(element,eventlistens) {
    for (const prop in eventlistens) {
        element.addEventListener(prop, eventlistens[prop]);
    }
}

var obj = function(id) { 
    return document.getElementById(id); 
}

var html = function(id,htmlString) { 
    document.getElementById(id).innerHTML = htmlString;
}
