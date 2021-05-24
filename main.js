var canvas=document.getElementById("AarushCanvass");
ctx=canvas.getContext("2d"); 
var mouseEvent="empty";
var lastposition_ofX, lastposition_ofY;
colour="black"; 
width=1; 
canvas.addEventListener("mousedown", my_mousedown); 
function my_mousedown(e){
    colour=document.getElementById("colour").value;
    width=document.getElementById("width").value; 
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";     
}
function my_mousemove(e){
    current_position_of_mouse_X= e.cilentX - canvas.offsetLeft;
    current_position_of_mouse_Y= e.cilentY - canvas.offsetTop;

    
    if (mouseEvent == "mousedown") {
        console.log("Current position of X and Y coordinates = ")
        console.log("X = " + current_position_of_mouse_X + "y = " + current_position_of_mouse_Y); 
ctx.beginPath(); 
ctx.strokeStyle = colour; 
ctx.lineWidth = width; 
ctx.arc(current_position_of_mouse_X, current_position_of_mouse_Y, radius ,0, 2 * Math.PI); 
ctx.stroke();
    }
}