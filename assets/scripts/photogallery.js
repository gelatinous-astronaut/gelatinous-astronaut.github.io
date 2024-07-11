document.addEventListener('DOMContentLoaded', () => {

    const images = ["https://live.staticflickr.com/65535/53829065531_373ec2bdfa_o.jpg",
        "https://live.staticflickr.com/65535/53829065526_6195dd6dc1_o.jpg",
        "https://live.staticflickr.com/65535/53829503170_26347f5b4e_o.jpg",
        "https://live.staticflickr.com/65535/53829503175_b81812f0be_o.jpg",
        "https://live.staticflickr.com/65535/53828152217_2c11978411_o.jpg",
        "https://live.staticflickr.com/65535/53828152852_bc77d35b5a_o.jpg",
        "https://live.staticflickr.com/65535/53828152857_3d339d6300_o.jpg",
        "https://live.staticflickr.com/65535/53829066506_3b4460d1a1_o.jpg",
        "https://live.staticflickr.com/65535/53828152877_76e84cb738_o.jpg",
        "https://live.staticflickr.com/65535/53829396894_e247d888f1_o.jpg",
        "https://live.staticflickr.com/65535/53829066596_b7b95190d8_o.jpg",
        "https://live.staticflickr.com/65535/53828152997_e740317c3d_o.jpg",
        "https://live.staticflickr.com/65535/53829306868_a18f5a301d_o.jpg",
        "https://live.staticflickr.com/65535/53829066646_35f9977b59_o.jpg",
        "https://live.staticflickr.com/65535/53829504285_3d77fdda6b_o.jpg",
        "https://live.staticflickr.com/65535/53829504390_01fa2a565c_o.jpg",
        "https://live.staticflickr.com/65535/53829066746_54e70b4bea_o.jpg",
        "https://live.staticflickr.com/65535/53829066786_2112b5fc06_o.jpg",
        "https://live.staticflickr.com/65535/53829066776_b3be2b81b9_o.jpg",
        "https://live.staticflickr.com/65535/53828153157_a3c3f9e445_o.jpg",
        "https://live.staticflickr.com/65535/53828152237_9caa80a21c_o.jpg",
        "https://live.staticflickr.com/65535/53829307833_ef2994a102_o.jpg",
        "https://live.staticflickr.com/65535/53829504485_88544c1b17_o.jpg",
        "https://live.staticflickr.com/65535/53829065696_e71146fc2f_o.jpg",
        "https://live.staticflickr.com/65535/53829397939_cf248d97e0_o.jpg",
        "https://live.staticflickr.com/65535/53829306943_8994b053c6_o.jpg",
        "https://live.staticflickr.com/65535/53829065771_8f632bc188_o.jpg",
        "https://live.staticflickr.com/65535/53829065816_8c84447b06_o.jpg",
        "https://live.staticflickr.com/65535/53828152327_5ec3c8398c_o.jpg",
        "https://live.staticflickr.com/65535/53829397054_6d5b60b74e_o.jpg",
        "https://live.staticflickr.com/65535/53829504550_b821a0fe16_o.jpg",
        "https://live.staticflickr.com/65535/53829503520_e1d06bee7a_o.jpg",
        "https://live.staticflickr.com/65535/53829504635_800069ea15_o.jpg",
        "https://live.staticflickr.com/65535/53829504625_ebb977278b_o.jpg",
        "https://live.staticflickr.com/65535/53829065926_6ef3778210_o.jpg",
        "https://live.staticflickr.com/65535/53828152417_72ac024806_o.jpg",
        "https://live.staticflickr.com/65535/53829504650_bcacf9a0c8_o.jpg",
        "https://live.staticflickr.com/65535/53829307168_7aac7126f1_o.jpg",
        "https://live.staticflickr.com/65535/53829503645_b98bd05e48_o.jpg",
        "https://live.staticflickr.com/65535/53829067061_ce1833e991_o.jpg",
        "https://live.staticflickr.com/65535/53829503710_ebd2e4b3cb_o.jpg",
        "https://live.staticflickr.com/65535/53829397204_b17031b414_o.jpg",
        "https://live.staticflickr.com/65535/53829307298_a3e2abcbde_o.jpg",
        "https://live.staticflickr.com/65535/53829397289_590d889064_o.jpg",
        "https://live.staticflickr.com/65535/53829307328_8d1c73069a_o.jpg",
        "https://live.staticflickr.com/65535/53829307338_02f6e280c3_o.jpg",
        "https://live.staticflickr.com/65535/53829503860_8f9087392c_o.jpg",
        "https://live.staticflickr.com/65535/53829307368_c7aeea976b_o.jpg",
        "https://live.staticflickr.com/65535/53829503920_3d3852066f_o.jpg",
        "https://live.staticflickr.com/65535/53829307428_20459ebb2b_o.jpg",
        "https://live.staticflickr.com/65535/53829503975_9853d7d07a_o.jpg",
        "https://live.staticflickr.com/65535/53828153372_a0533525a9_o.jpg",
        "https://live.staticflickr.com/65535/53829397504_5483ddd7f1_o.jpg",
        "https://live.staticflickr.com/65535/53829307483_3569f3360f_o.jpg",
        "https://live.staticflickr.com/65535/53829397549_b1aec64ca1_o.jpg",
        "https://live.staticflickr.com/65535/53829066406_4584f78071_o.jpg",
        "https://live.staticflickr.com/65535/53829398084_19a322d410_o.jpg",
        "https://live.staticflickr.com/65535/53828153342_08e0bd21f7_o.jpg",
        "https://live.staticflickr.com/65535/53828153347_069116d744_o.jpg",
        "https://live.staticflickr.com/65535/53829067071_bc0a35bfcc_o.jpg",
        "https://live.staticflickr.com/65535/53829504715_e8b8cec48e_o.jpg",
        "https://live.staticflickr.com/65535/53829308008_15133fc042_o.jpg",
        "https://live.staticflickr.com/65535/53828153367_bb096d461d_o.jpg",
        "https://live.staticflickr.com/65535/53828153377_0c90c21615_o.jpg",
        "https://live.staticflickr.com/65535/53828153382_728c0edecd_o.jpg",
        "https://live.staticflickr.com/65535/53829398179_b6e2a45c3a_o.jpg",
        "https://live.staticflickr.com/65535/53828153392_dbbf0c7c09_o.jpg",
        "https://live.staticflickr.com/65535/53829308048_843e92417b_o.jpg",
        "https://live.staticflickr.com/65535/53829398189_778ee78da1_o.jpg",
        "https://live.staticflickr.com/65535/53829308058_89645953b6_o.jpg",
        "https://live.staticflickr.com/65535/53828153432_d8ea61350b_o.jpg",
        "https://live.staticflickr.com/65535/53829398209_d4fd87117b_o.jpg",
        "https://live.staticflickr.com/65535/53829067111_992ea3b8bf_o.jpg",
        "https://live.staticflickr.com/65535/53828153442_22c7422aaf_o.jpg",
        "https://live.staticflickr.com/65535/53828153472_729389e2dd_o.jpg",
        "https://live.staticflickr.com/65535/53829504780_928eeec1de_o.jpg",
        "https://live.staticflickr.com/65535/53829067126_1ebfce8b5d_o.jpg",
        "https://live.staticflickr.com/65535/53829308153_64b7cddb16_o.jpg",
        "https://live.staticflickr.com/65535/53829308163_81246f5c4e_o.jpg",
        "https://live.staticflickr.com/65535/53829067131_0337bf998e_o.jpg",
        "https://live.staticflickr.com/65535/53829067141_d92fe6e251_o.jpg",
        "https://live.staticflickr.com/65535/53829504840_721d273d71_o.jpg",
        "https://live.staticflickr.com/65535/53829398264_615bfacf30_o.jpg",
        "https://live.staticflickr.com/65535/53829504850_8dd14cfebc_o.jpg",
        "https://live.staticflickr.com/65535/53829504865_fed4482c27_o.jpg",
        "https://live.staticflickr.com/65535/53828153542_6be2567abe_o.jpg",
        "https://live.staticflickr.com/65535/53829067186_67c599b34c_o.jpg",
        "https://live.staticflickr.com/65535/53829398319_e99251c94e_o.jpg",
        "https://live.staticflickr.com/65535/53829504890_0b8079878f_o.jpg",
        "https://live.staticflickr.com/65535/53829504895_0cfb014807_o.jpg",
        "https://live.staticflickr.com/65535/53829308223_bb5e47ce32_o.jpg",
        "https://live.staticflickr.com/65535/53829398354_7f0ce69a10_o.jpg",
        "https://live.staticflickr.com/65535/53829308253_fde5e1f43d_o.jpg",
        "https://live.staticflickr.com/65535/53829398384_8cee0b2573_o.jpg",
        "https://live.staticflickr.com/65535/53829398404_c0a0cac82e_o.jpg",
        "https://live.staticflickr.com/65535/53828153587_801d0e4555_o.jpg",
        "https://live.staticflickr.com/65535/53829308303_5207bdfa17_o.jpg",
        "https://live.staticflickr.com/65535/53829504950_4cda22cf45_o.jpg",
        "https://live.staticflickr.com/65535/53829398444_0cf17d4a53_o.jpg",
        "https://live.staticflickr.com/65535/53828153622_afe76dbc4a_o.jpg",
        "https://live.staticflickr.com/65535/53829398459_c056315dab_o.jpg",
        "https://live.staticflickr.com/65535/53829308338_1828052b6c_o.jpg",
        "https://live.staticflickr.com/65535/53828153647_7168cee1c4_o.jpg",
        "https://live.staticflickr.com/65535/53829067326_ec301d69ca_o.jpg",
        "https://live.staticflickr.com/65535/53829398504_02a04263a3_o.jpg",
        "https://live.staticflickr.com/65535/53829308363_10e61b6f29_o.jpg",
        "https://live.staticflickr.com/65535/53829398514_f34063566d_o.jpg"]
        // "https://live.staticflickr.com/65535/53829308413_1296510b7b_o.jpg",
        // "https://live.staticflickr.com/65535/53829067341_99dd4a2ac6_o.jpg"]

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

