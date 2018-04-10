lightbox.option({
	'alwaysShowNavOnTouchDevices': true
});



// Search

const photos = document.getElementById('photo-gallery').children;

document.body.addEventListener('keyup', (event) => {

	event.preventDefault();

	const searchValue = event.target.value.toLowerCase();

	[...photos].forEach(photo => {

		const photoCaption = photo.getAttribute('data-title').toLowerCase();

		if (photoCaption.includes(searchValue)) {
			photo.style.display = 'initial';
		} else {
			photo.style.display = 'none';
		}

	});

});