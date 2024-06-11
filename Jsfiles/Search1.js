document.getElementById('searchInput').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const searchResultsContainer = document.getElementById('searchResults');

    // Clear previous results
    searchResultsContainer.innerHTML = '';

    if (searchQuery.trim() === '') {
        return;
    }

    // Fetch and display results from movies.html and series.html
    Promise.all([
        fetch('/Components/Movies.html').then(response => response.text()),
        fetch('/Components/Genre.html').then(response => response.text())
    ]).then(pages => {
        pages.forEach(pageContent => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(pageContent, 'text/html');
            const movieCards = doc.querySelectorAll('.movie-card');

            movieCards.forEach(card => {
                if (card.getAttribute('data-title').toLowerCase().includes(searchQuery)) {
                    searchResultsContainer.innerHTML += card.outerHTML;
                }
            });
        });
    });
});