//Adventure page - gallery
const images = "images/Meskel_IMG_"
let currentImage = 1;
function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    let src_split = imageSrc.split("/")
    let idx_split = src_split[src_split.length-1].split(/[._]/)
    currentImage = +idx_split[2];
    modalImage.src = src_split[src_split.length-2] + "/" + src_split[src_split.length-1];
    modal.style.display = 'flex';
    fadeArrow();
    document.addEventListener('keydown', handleKeyPress);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.removeEventListener('keydown', handleKeyPress);
}

function prevImage() {
    currentImage = currentImage - 1;
    if (currentImage >= 1) {
        updateModalImage();
    } else {
        currentImage = 1
    }
    fadeArrow();
}

function nextImage() {
    currentImage = currentImage + 1;
    if (currentImage <= 30) {
        updateModalImage();
    } else {
        currentImage = 30
    }
    fadeArrow();
}

function updateModalImage() {
    const modalImage = document.getElementById('modalImage');
    if (currentImage == 30) {
        modalImage.src = images + currentImage + ".jpeg";
    } else {
        modalImage.src = images + currentImage + ".jpg";
    }
}

function fadeArrow() {
    if (currentImage == 30) {
        document.getElementsByClassName("modal__arrows--right")[0].style.cursor = "not-allowed"
        document.getElementsByClassName("modal__arrows--right")[0].style.opacity = "0.5"
    } else if (currentImage == 1) {
        document.getElementsByClassName("modal__arrows--left")[0].style.cursor = "not-allowed"
        document.getElementsByClassName("modal__arrows--left")[0].style.opacity = "0.5"
    } else {
        document.getElementsByClassName("modal__arrows")[0].style.cursor = "pointer"
        document.getElementsByClassName("modal__arrows")[0].style.opacity = "1"
        document.getElementsByClassName("modal__arrows")[1].style.cursor = "pointer"
        document.getElementsByClassName("modal__arrows")[1].style.opacity = "1"
    }
}

function handleKeyPress(event) {
    switch (event.key) {
        case 'ArrowLeft':
            prevImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
        case 'Escape':
            closeModal();
            break;
    }
}

let galleryImages = document.getElementsByClassName("gallery__image")
for (let img of galleryImages) {
    let src = img.src
    img.addEventListener("click", () => openModal(src))
}

document.getElementsByClassName('modal__div')[0].addEventListener("click", closeModal)
document.getElementsByClassName("modal__arrows--left")[0].addEventListener("click", prevImage)
document.getElementsByClassName("modal__arrows--right")[0].addEventListener("click", nextImage)

