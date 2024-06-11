const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Function to load external movie cards
function loadExternalMovies() {
    fetch('/Components/Movies.html')  // Adjust the path here if needed
        .then(response => response.text())
        .then(data => {
            const externalMoviesContainer = document.createElement('div');
            externalMoviesContainer.innerHTML = data;
            document.body.appendChild(externalMoviesContainer);
            // Hide the external movie cards initially
            externalMoviesContainer.style.display = 'none';
        })
        .catch(error => console.error('Error loading external movies:', error));
}


// Function to show movie cards based on search query
searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';

    if (query.trim() !== '') {
        // Get all movie cards from the main and external HTML
        const allMovies = document.querySelectorAll('.movie-card');

        // Filter and display matching movie cards
        allMovies.forEach(movie => {
            const title = movie.getAttribute('data-title').toLowerCase();
            if (title.includes(query)) {
                searchResults.appendChild(movie.cloneNode(true));
            }
        });
    }
});

// Load external movie cards when the page loads
window.onload = loadExternalMovies;
window.onload = loadExternalMovies1;
