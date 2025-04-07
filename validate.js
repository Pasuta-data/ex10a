function checkHeight() {
	let h = parseInt(document.getElementById("myHeight").value.trim());
	return !isNaN(h) && h >= 1 && h <= 200;
}

function checkInseam() {
	let i = parseInt(document.getElementById("myInseam").value.trim());
	return !isNaN(i) && i >= 1 && i <= 100;
}

function validateForm() {
	if (!checkHeight()) {
		alert("Invalid value for height!");
		document.getElementById("myHeight").focus();
		return false;
	} else {
		if (!checkInseam()) {
			alert("Invalid value for inseam!!");
			document.getElementById("myInseam").focus();
			return false;
		} else {
			size = sizeCalculate();
			alert("Bike size based on you height / insteam  is " + size);
			return false;
		}
	}
}
