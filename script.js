openModal = document.querySelector('button');
modalBackground = document.querySelector('.modal-container');
closeModal = document.querySelector('.close');


modalBackground.style.display = 'none';

openModal.onclick = function() {
    modalBackground.style.display = 'block';
    modalBackground.classList.add('muncullah');
}

closeModal.onclick = function() {
    modalBackground.style.display = 'none';
    modalBackground.classList.remove('muncullah');
}

window.onclick = function(event) {
    if (event.target == modalBackground) {
        modalBackground.style.display = "none";
    }
}