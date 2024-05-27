// gallery.js

// Sample images array (replace with your own image URLs)
const imageFiles = ["01_galaxy.png", "02_spacenoise.png", "03_spacenoise.png",
    "04_diffractedsphere.png","05_stereographic.jpg",
    "06_stereographic2.png","07_infraredtemple.png","08_temple.png",
    "09_imagination.png","10_fractured_boundaries.png","11_symbol.png",
    "12_persistence_of_vision.png","13_dreams_of_industry.png","14_tangled-in-the-frame.png",
    "15_glitch-poem-1_small.png","15_glitch-poem-2_small.png","16_glitch-poem-3_small.png",
    "17_glitch-poem-4_small.png","18_glitch-poem-5_small.png","19_glitch-poem-6.2_small.png",
    "20_fragments_of_bone.png","21_no_object.png","22_sandpile.png",
    "23_glitch.png","24_orbital_trajectory.png","25_escape.png"
];

const parentFolder = 'assets/images/art/';

const images = imageFiles.map(filename => parentFolder + filename);

const imagesPerPage = 1;
let currentPage = 1;
const totalPages = Math.ceil(images.length / imagesPerPage);

const gallery = document.getElementById('gallery');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const pageInfo = document.getElementById('pageInfo');

function renderGallery(page) {
    gallery.innerHTML = '';

    const startIndex = (page - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;

    const pageImages = images.slice(startIndex, endIndex);
    pageImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        gallery.appendChild(img);
    });

    pageInfo.textContent = `Page ${page} of ${totalPages}`;
    prevButton.disabled = page === 1;
    nextButton.disabled = page === totalPages;
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderGallery(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderGallery(currentPage);
    }
});

// Initial render
renderGallery(currentPage);
