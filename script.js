const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// Unsplash API configuration
// const apiKey = 'ctMG8haf-qRPxQBBq7TUoMjFlSsyVm8D_PWD0iPA718';
const apiKey = 'dtkyZAV5zRvH10hIQ0tZ89CEuQeXWfFaQpLXEkEUYko';
let count = 5;
let apiUrl = '';

let isInitialLoad = true;
let photosArray = [];
let totalImages = 0;
let imagesLoaded = 0;
let ready = false;

// Helper function to set the attributes for the DOM elements
function setAttributes(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
}

// Check if all images were loaded
function imageLoaded() {
	imagesLoaded++;

	if (imagesLoaded === totalImages) {
		ready = true;
		loader.hidden = true;
	}
}

// Helper function to update API URL with new count
function updateAPIURLWithNewCount(picCount) {
	apiUrl =`https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${picCount}`;
}

// Display photos fetched from Unsplash API.
function displayPhotos() {
	photosArray.forEach((photo) => {
		imagesLoaded = 0;
		totalImages = photosArray.length;

		// Create anchor element to link to Unsplash
		const item = document.createElement('a');
		setAttributes(item, {
			'href': photo.links.html,
			'target': '_blank'
		});

		// Create an image element for the photo
		const image = document.createElement('img');
		setAttributes(image, {
			'src': photo.urls.regular,
			'alt': photo.alt_description,
			'title': photo.alt_description
		});

		// Check if image has loaded
		image.addEventListener('load', imageLoaded);
		// Put <img> inside <a>, then put both inside image container
		item.appendChild(image);
		imageContainer.appendChild(item);
	});
}

// Check if scrolling near bottom of page, Load more photos
window.addEventListener('scroll', () => {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
		ready = false;

		// Load more photos
		getPhotos();
	}
});


// Get photos from Unsplash API
async function getPhotos() {
	try {
		if (isInitialLoad) {
			count = 5;
			isInitialLoad = false;
		} else {
			count = 30;
		}
		updateAPIURLWithNewCount(count);

		const response = await fetch(apiUrl);
		const data = await response.json();
		
		photosArray = data;
		displayPhotos();
	} catch (error) {
		// Handle error
		throw new Error('Unable to fetch photos from Unsplash API');
	}
}

// Get photos on load
getPhotos();