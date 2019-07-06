function showList(ID) {
	var i;
	var x = document.getElementsByClassName('language-list')
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none"
	}
	document.getElementById(ID).style.display = "block";
}