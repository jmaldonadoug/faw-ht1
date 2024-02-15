
const getData = () => {
    const input = document.getElementById('num').value;

    fetch(`https://swapi.dev/api/people/${input}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            alert('Network response was not ok.');
        })
        .then(data => {
            const container = document.getElementById('data');
            let html = `
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">${data.name}</span>
                    <p><b>Altura: </b>${data.height}</p>
                    <p><b>Peso: </b>${data.mass}</p>
                    <p><b>Color de cabello: </b>${data.hair_color}</p>
                    <p><b>Color de piel: </b>${data.skin_color}</p>
                    <p><b>Color de ojos: </b>${data.eye_color}</p>
                    <p><b>Año de nacimiento: </b>${data.birth_year}</p>
                    <p><b>Genero: </b>${data.gender}</p>
                </div>
            </div>
            `;

            container.innerHTML = html;
        });
}