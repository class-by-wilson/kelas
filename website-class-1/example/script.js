function resetHeadings() {
	const headings = document.getElementsByClassName("heading");

	for (let i = 0; i < headings.length; i++)
		headings.item(i).innerHTML = `heading ${i + 1}`;
}

function inputOnChange(e) {
	if (e.target.value === "") {
		resetHeadings();
		return;
	}

	const headings = document.getElementsByClassName("heading");

	for (let i = 0; i < headings.length; i++)
		headings.item(i).innerHTML = `${e.target.value}`;
}

document.getElementById("inputbox").addEventListener("input", inputOnChange);

function alertOnClick() {
	const input = document.getElementById("inputbox").value;

	alert(input);
}

function clearOnClick() {
	document.getElementById("inputbox").value = "";
	resetHeadings();
}
