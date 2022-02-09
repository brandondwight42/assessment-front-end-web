console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('Form submitted successfully!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const catImage = document.querySelector(`#cat-picture`)

catImage.addEventListener('mouseover', () => {
	alert('You look wonderful today!')
})