document.addEventListener("DOMContentLoaded", function() {
    // List of image paths
    const images = [
        'assets/images/backgrounds/017C.png',
        'assets/images/backgrounds/023C.png',
        'assets/images/backgrounds/024C.png',
        'assets/images/backgrounds/025C.png',
        'assets/images/backgrounds/GALAXY3.JPG',
        'assets/images/backgrounds/JUPEQ.JPG',
        'assets/images/backgrounds/NEPTUNE.JPG',
        'assets/images/backgrounds/SPACE.png',
        'assets/images/backgrounds/ahm60003.jpg',
        'assets/images/backgrounds/ahm60025.jpg',
        'assets/images/backgrounds/ahm60058.jpg',
        'assets/images/backgrounds/ahm60083.jpg',
        'assets/images/backgrounds/cc200371.jpg',
        'assets/images/backgrounds/cc200372.jpg',
        'assets/images/backgrounds/cc330139.jpg',
        'assets/images/backgrounds/cc440038.jpg',
        'assets/images/backgrounds/cio60259.jpg',
        'assets/images/backgrounds/cio60809.jpg',
        'assets/images/backgrounds/cio60825.jpg',
        'assets/images/backgrounds/ciq60201.jpg',
        'assets/images/backgrounds/ciq60593.jpg',
        'assets/images/backgrounds/comp016.gif',
        'assets/images/backgrounds/galaxy_a.jpg',
        'assets/images/backgrounds/galaxy_b.jpg',
        'assets/images/backgrounds/galaxy_c.jpg',
        'assets/images/backgrounds/galaxy_d.jpg',
        'assets/images/backgrounds/galaxy_e.jpg',
        'assets/images/backgrounds/qaj50012.jpg',
        'assets/images/backgrounds/qhl50026.jpg',
        'assets/images/backgrounds/stars.gif',
        'assets/images/backgrounds/strawbr.jpg'
    ];

    function getRandomImage(images) {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    const randomImage = getRandomImage(images);
    document.body.style.backgroundImage = `url(${randomImage})`;
});
