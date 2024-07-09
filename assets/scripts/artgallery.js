document.addEventListener('DOMContentLoaded', () => {

    const images = ["https://live.staticflickr.com/65535/53829328334_9a3c48db37_o.png",
        "https://live.staticflickr.com/65535/53829328149_854f5a97d1_o.png",
        "https://live.staticflickr.com/65535/53829328269_c874576eee_o.png",
        "https://live.staticflickr.com/65535/53828996271_ac27255f46_o.png",
        "https://live.staticflickr.com/65535/53829433545_2946023133_o.png",
        "https://live.staticflickr.com/65535/53829237578_849aa100a1_o.png",
        "https://live.staticflickr.com/65535/53829237373_0b95a427b3_o.png",
        "https://live.staticflickr.com/65535/53829327894_ebdaf05d6a_o.png",
        "https://live.staticflickr.com/65535/53828083217_11588a0308_o.png",
        "https://live.staticflickr.com/65535/53829433275_9e15325b17_o.png",
        "https://live.staticflickr.com/65535/53828995691_bb23892909_o.png",
        "https://live.staticflickr.com/65535/53829327669_b0cf469ccb_o.png",
        "https://live.staticflickr.com/65535/53828995581_a9ec9ca8fb_o.png",
        "https://live.staticflickr.com/65535/53829236948_048643b238_o.png",
        "https://live.staticflickr.com/65535/53829432980_dc7055c5ed_o.png",
        "https://live.staticflickr.com/65535/53829236848_b027372e10_o.png",
        "https://live.staticflickr.com/65535/53829328129_4da68027f0_o.png",
        "https://live.staticflickr.com/65535/53829432695_3f4f0b1db6_o.png",
        "https://live.staticflickr.com/65535/53829432685_cc8cf5e3fb_o.png",
        "https://live.staticflickr.com/65535/53829236728_5436fedfdb_o.png",
        "https://live.staticflickr.com/65535/53829432845_c0ffaa88f5_o.png",
        "https://live.staticflickr.com/65535/53829236793_a3512e287b_o.png",
        "https://live.staticflickr.com/65535/53829327594_21abcb16d2_o.png",
        "https://live.staticflickr.com/65535/53829327664_7914751f3d_o.png",
        "https://live.staticflickr.com/65535/53828995696_089387ed1c_o.png",
        "https://live.staticflickr.com/65535/53828996081_84424937c2_o.jpg"]

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

