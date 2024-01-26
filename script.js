const searchInput = document.getElementById('search-input');
const resultsArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');


function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then(response => response.json())
        .then(result => displayResults(result));
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');

    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultsArtists.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchValue = searchInput.value.toLowerCase();
    if (searchValue === '') {
        resultsArtists.classList.add('hidden');
        resultPlaylist.classList.remove('hidden');
        return;
    }

    requestApi(searchValue);
});