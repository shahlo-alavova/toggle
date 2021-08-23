// var element = document.querySelector("button");
// var isWhite = true;
// element.addEventListener("click", function(){
// if (isWhite){
// 	 document.body.style.background = "purple";

// }
// else {
// 	document.body.style.background = "white";

// }
// isWhite = !isWhite;

// });

var element = document.querySelector("button");

element.addEventListener("click", function(){

	 document.body.classList.toggle("purple");

});