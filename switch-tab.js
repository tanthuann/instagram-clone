function openTab(nameTab) {
	var i;
	var x = document.getElementsByClassName('tab');
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none"
	}
	var p = document.getElementsByClassName(nameTab);
	for (var i = 0; i < p.length; i++) {
		p[i].style.display = "flex";
		// document.getElementById(nameTab).style.display = "flex";
	}
	// document.getElementById(nameTab).style.display = "flex";
}