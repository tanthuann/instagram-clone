function openTab(nameTab) {
	var i;
	var x = document.getElementsByClassName('tab');
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none"
	}
	document.getElementById(nameTab).style.display = "flex";
}