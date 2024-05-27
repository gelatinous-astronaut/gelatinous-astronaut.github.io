document.addEventListener('DOMContentLoaded', () => {

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

    let captions = {};
    fetch('captions.json')
        .then(response => response.json())
        .then(data => captions = data);

    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentIndex;

    // thumbnails
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Image ${index + 1}`;
        img.classList.add('thumbnail');
        img.addEventListener('click', () => openModal(index));
        gallery.appendChild(img);
    });

    function openModal(index) {
        currentIndex = index;
        modal.style.display = 'flex';
        modalImg.src = images[currentIndex];
        caption.textContent = captions[images[currentIndex]] || 'No caption available';
    }

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        caption.textContent = captions[images[currentIndex]] || 'No caption available';
    });

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        modalImg.src = images[currentIndex];
    });

    next.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        modalImg.src = images[currentIndex];
        caption.textContent = captions[images[currentIndex]] || 'No caption available';

    });

    // Close the modal when clicking outside of the image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Respond to left and right arrow keys
    document.addEventListener('keydown', (event) => {
        if (modal.style.display === 'flex') {
            if (event.key === 'ArrowLeft') {
                currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
                modalImg.src = images[currentIndex];
                caption.textContent = captions[images[currentIndex]] || 'No caption available';
            } else if (event.key === 'ArrowRight') {
                currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
                modalImg.src = images[currentIndex];
                caption.textContent = captions[images[currentIndex]] || 'No caption available';
            } else if (event.key === 'Escape') {
                modal.style.display = 'none';
            }
        }
    });
});

