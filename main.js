var mouseEvent = "empty";
var last_pos_x, last_pos_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width = 1;

canvas.addEventListener("mouseDown", my_mouseDown);

function my_mouseDown(e){
    mouseEvent = "mouseDown";

}

canvas.addEventListener("mouseUp", my_mouseUp);

function my_mouseUp(e){
    mouseEvent = "mouseUp";
    
}

canvas.addEventListener("mouseLeave", my_mouseLeave);

function my_mouseLeave(e){
    mouseEvent = "mouseLeave";
    
}