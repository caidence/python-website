// generates random number between 1 and 255
const randomNumber = function() {
	return Math.floor(Math.random() * 256);
}

// generates random rgb value
const randomColor = function() {
	let red = randomNumber();
	let green = randomNumber();
	let blue = randomNumber();
	let rgbValue = `rgb(${red}, ${green}, ${blue})`;
	return rgbValue;
}

const a = document.querySelector('.title h1');
a.style.color = randomColor();

