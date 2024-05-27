document.addEventListener('DOMContentLoaded', () => {

    const imageFiles = ["0027_7.jpg","15350001.jpg",
        "15350002.jpg","15350008.jpg","15350020.jpg","15350021.jpg",
        "15350022.jpg","15350023.jpg","15350024.jpg","15350026.jpg",
        "15350027.jpg","15350028.jpg","15350029.jpg","15350030.jpg",
        "15350039.jpg","15360001.jpg","15360015.jpg","15360020.jpg",
        "15360023.jpg","15360024.jpg","15370001.jpg","15370008.jpg",
        "15370012.jpg","15370023.jpg","15380007.jpg","15380008.jpg",
        "15380010.jpg","15380014.jpg","15380024.jpg","15380026.jpg",
        "15380027.jpg","60440001.jpg","60440002.jpg","60440004.jpg",
        "60440005.jpg","60440006.jpg","60440007.jpg","60440009.jpg",
        "60440016.jpg","60440019.jpg","60440027.jpg","60440029.jpg",
        "60440030.jpg","60440031.jpg","60440032.jpg","60440033.jpg",
        "60450006.jpg","60450010.jpg","60450014.jpg","60450019.jpg",
        "60450021.jpg","0016_20A.jpg","0017_19A.jpg","Film_001.jpg","Film_002 2.jpg","Film_002.jpg",
        "Film_004.jpg","Film_007.jpg","Film_008 2.jpg","Film_008 3.jpg",
        "Film_008.jpg","Film_009 2.jpg","Film_009.jpg","Film_010.jpg",
        "Film_011 2.jpg","Film_011.jpg","Film_012.jpg","Film_013.jpg",
        "Film_014 2.jpg","Film_014 3.jpg","Film_014.jpg","Film_015 copy.jpg",
        "Film_015.jpg","Film_016 2.jpg","Film_016.jpg","Film_017.jpg",
        "Film_018.jpg","Film_020.jpg","Film_024 2.jpg","Film_024.jpg",
        "Film_028.jpg","Film_031 2.jpg","Film_031.jpg","Film_033.jpg",
        "R1-02946-0000_0001.JPG","R1-02946-000X.JPG","R1-02946-0001.JPG","R1-02946-0003.JPG",
        "R1-02946-0004.JPG","R1-02946-0005.JPG","R1-02946-0007.JPG","R1-02946-0009.JPG",
        "R1-02946-0012.JPG","R1-02946-0016.JPG","R1-02946-0020.JPG","R1-02946-0021.JPG",
        "R1-02946-0023.JPG","R1-02946-0029.JPG","R1-02946-0037.JPG","R1-02947-0008.JPG",
        "R1-02947-0011.JPG","R1-02947-0013.JPG","R1-02947-0015.JPG","R1-02947-0025.JPG",
        "R1-02947-0030.JPG","R1-02947-0031.JPG","R1-02947-0032.JPG","R1-02947-0033.JPG",
        "R1-02947-0037.JPG"
    ];
    
    const parentFolder = 'assets/images/photos/';
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

    // Create thumbnail images in the gallery
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Image ${index + 1}`;
        img.classList.add('thumbnail');
        img.addEventListener('click', () => openModal(index));
        gallery.appendChild(img);
    });

    // Open the modal with the selected image
    function openModal(index) {
        currentIndex = index;
        modal.style.display = 'flex';
        modalImg.src = images[currentIndex];
        caption.textContent = captions[images[currentIndex]] || 'No caption available';

    }

    // Close the modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        caption.textContent = captions[images[currentIndex]] || 'No caption available';
    });

    // Navigate to the previous image
    prev.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        modalImg.src = images[currentIndex];
    });

    // Navigate to the next image
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

