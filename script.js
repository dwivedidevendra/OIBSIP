let result = document.getElementById("result");

function clearResult() {
	result.value = "";
}

function backspace() {
	result.value = result.value.slice(0, -1);
}

function append(value) {
	result.value += value;
}

function calculate() {
	result.value = eval(result.value);
}
