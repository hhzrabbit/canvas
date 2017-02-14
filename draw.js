var c = document.getElementById("canvas")
var ctx = c.getContext("2d")
var button = document.getElementById("clear-btn")

var drawRect = function(e){
    
    var colors = ["#FF0000", //red
		  "#FF4000", "#FF8000", "#FFBF00", //orangeish
		  "#FFFF00", //yellow
		  "#BFFF00", "#80FF00", "#40FF00", "#00FF00", "#00FF40", "#00FF80", //greenish
		  "#00FFBF", "#00FFFF",  "#00BFFF", "#0080FF", "#0040FF"," #0000FF", "#4000FF", //blusih
		  "#8000FF", "#BF00FF", //purpleish
		  "#FF00FF", "#FF00BF", "#FF0080", "#FF0040" //pinkish
		  ];
    
    var x = e.offsetX - 10;
    var y = e.offsetY - 10;
    
    ctx.fillStyle = colors[ parseInt(y / 20) ] ;

    ctx.fillRect( x, y, 20, 20 );
}

var clear = function(e){
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, 500, 500)
}

c.addEventListener("click", drawRect);
button.addEventListener("click", clear);

