let currentPage = 1;

// Function to navigate between pages
function goToPage(pageNumber) {
    document.querySelector(`#page-${currentPage}`).classList.remove('active');
    currentPage = pageNumber;
    document.querySelector(`#page-${currentPage}`).classList.add('active');
}

// Initialize the first page
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#page-1').classList.add('active');

    // Add movement functionality for "No" button on Page 4
    const noButton = document.querySelector('#no-button');
    noButton.addEventListener('mouseover', () => {
        noButton.style.transform = `translate(${Math.random() * 300 - 150}px, ${Math.random() * 300 - 150}px)`;
    });

    // Add movement functionality for "No" button on Page 5
    const noButtonFinal = document.querySelector('#no-button-final');
    noButtonFinal.addEventListener('mouseover', () => {
        noButtonFinal.style.transform = `translate(${Math.random() * 300 - 150}px, ${Math.random() * 300 - 150}px)`;
    });
});
