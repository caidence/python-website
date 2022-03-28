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

// turns title random coloe when you click on it
const heading = document.getElementById('title');
heading.addEventListener('click', () => title.style.color = randomColor());


// Turns all h3 tags in tutorial-link class random colors
const h3 = document.querySelectorAll('.tutorial-link h3');
for (let i = 0; i < h3.length; i += 1) {
	h3[i].style.color = randomColor();
}