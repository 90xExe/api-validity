// Modal functions
function openModal(id) {
    document.getElementById('modal-' + id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById('modal-' + id).style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}