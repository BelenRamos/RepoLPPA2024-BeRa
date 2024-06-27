document.getElementById('fetchAllButton').addEventListener('click', fetchAllCharacters);
document.getElementById('filterButton').addEventListener('click', filterCharacters);
document.getElementById('prevPageButton').addEventListener('click', () => fetchCharacters(prevPageUrl));
document.getElementById('nextPageButton').addEventListener('click', () => fetchCharacters(nextPageUrl));

let prevPageUrl = null;
let nextPageUrl = null;

function fetchAllCharacters() {
    var url = 'https://rickandmortyapi.com/api/character';
    fetchCharacters(url);
}

function filterCharacters() {
    var name = document.getElementById('name').value;
    var status = document.getElementById('status').value;
    var species = document.getElementById('species').value;
    var type = document.getElementById('type').value;
    var gender = document.getElementById('gender').value;

    var url = new URL('https://rickandmortyapi.com/api/character');
    var params = { name: name, status: status, species: species, type: type, gender: gender };
    Object.keys(params).forEach(function(key) {
        if (params[key]) {
            url.searchParams.append(key, params[key]);
        }
    });

    fetchCharacters(url);
}

function fetchCharacters(url) {
    fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(function(data) {
            displayCharacters(data.results);
            document.getElementById('count').textContent = `Personajes encontrados: ${data.info.count}`;
            prevPageUrl = data.info.prev;
            nextPageUrl = data.info.next;

            // Mostrar u ocultar botones de paginación según corresponda
            document.getElementById('prevPageButton').style.display = prevPageUrl ? 'inline' : 'none';
            document.getElementById('nextPageButton').style.display = nextPageUrl ? 'inline' : 'none';
        })
        .catch(function(error) {
            displayError(error);
        });
}

function displayCharacters(characters) {
    var charactersDiv = document.getElementById('characters');
    var errorDiv = document.getElementById('error');
    charactersDiv.innerHTML = '';
    errorDiv.textContent = '';

    if (!characters || characters.length === 0) {
        errorDiv.textContent = 'No se encontraron personajes.';
        return;
    }

    characters.forEach(function(character) {
        var characterDiv = document.createElement('div');
        characterDiv.classList.add('character');
        characterDiv.innerHTML = `
            <h2>${character.name}</h2>
            <p><strong>Estado:</strong> ${character.status}</p>
            <p><strong>Especie:</strong> ${character.species}</p>
            <p><strong>Género:</strong> ${character.gender}</p>
            <img src="${character.image}" alt="${character.name}">
        `;
        charactersDiv.appendChild(characterDiv);
    });
}

function displayError(error) {
    var errorDiv = document.getElementById('error');
    errorDiv.textContent = 'Error: ' + error.message;
}

