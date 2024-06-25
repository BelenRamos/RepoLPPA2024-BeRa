document.getElementById('fetchAllButton').addEventListener('click', fetchAllCharacters);
document.getElementById('filterButton').addEventListener('click', filterCharacters);

function fetchAllCharacters() {
    var url = 'https://rickandmortyapi.com/api/character';
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayCharacters(data.results);
        })
        .catch(function(error) {
            displayError(error);
        });
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

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayCharacters(data.results);
        })
        .catch(function(error) {
            displayError(error);
        });
}

function displayCharacters(characters) {
    var charactersDiv = document.getElementById('characters');
    charactersDiv.innerHTML = '';

    // Verificar si characters es undefined o null
    if (!characters) {
        var errorDiv = document.getElementById('error');
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