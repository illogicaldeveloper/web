
function obj(id) {
    return document.getElementById(id);
};
function html(id,data) {
    document.getElementById(id).innerHTML = data;
};
function appendhtml(id,data) {
    document.getElementById(id).innerHTML += data;
};
function random(min,max) {
    return Math.floor(Math.random() * max) + min  
};
