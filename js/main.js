'use strict';

// ---- Lightbox2

lightbox.option({
	'alwaysShowNavOnTouchDevices': true
});



// ---- Search

// Main search code

const photos = Array.from(document.getElementById('photo-gallery').children);
photos.shift();

document.body.addEventListener('keyup', (event) => {

	event.preventDefault();

	const searchValue = event.target.value.toLowerCase();

	photos.forEach(photo => {

		const photoCaption = photo.getAttribute('data-title').toLowerCase();

		if (photoCaption.includes(searchValue)) {
			photo.style.display = 'initial';
		} else {
			photo.style.display = 'none';
		}

	});

});