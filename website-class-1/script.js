const input = document.getElementById("ipan-gay");

input.addEventListener("input", (e) => {
	const text = document.getElementById("text");

	text.innerHTML = e.target.value;
});
