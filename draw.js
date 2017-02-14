var c = document.getElementById("canvas")
var ctx = c.getContext("2d")

var drawRect = function(e){
  /*  var colors = ["#FF0000", 
		  "#FF8000", 
		  "#FFFF00", 
		  "#00FF00", 
		  "#0000FF", 
		  "#8000FF" ];
*/    
    var x = event.clientX;
    var y = event.clientY;
 //   ctx.fillStyle( colors[0] );
    ctx.fillStyle("#ff0000");
    ctx.fillRect( x - 20, y - 20, 20, 20 );
}

var clear = function(e){
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, 500, 500)
}

c.addEventListener("click", drawRect);
