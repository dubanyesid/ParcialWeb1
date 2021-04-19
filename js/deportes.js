function cargarJsonDeportes(url) {
    var url = "https://carlosreneas.github.io/endpoints/categoria_deporte.json";

    fetch(url)
        .then(response => response.json())
        .then(data => generarNoticias(data))
        .catch(error => {});
}

function generarNoticias(json) {
    const tabla = document.getElementById("tabla_deportes");

    for (let i in json) {

        console.log(json)
        tabla.innerHTML += `<hr><tr>
                        <td>${json[i].titulo}</td>
                        </tr>`
    }
}
cargarJsonDeportes();