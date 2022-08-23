document.body.onload = function(){
	var allElements = document.body.getElementsByTagName('*');

	for (var i=0; i < allElements.length; i++){
		allElements[i].style.borderRadius="0";
	}

	console.log("UnRounder loaded!");
};