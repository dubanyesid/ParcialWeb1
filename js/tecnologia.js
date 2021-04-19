function cargarJsonTecnologia() {
    var url = "https://carlosreneas.github.io/endpoints/categoria_tecnologia.json";

    fetch(url)
        .then(response => response.json())
        .then(data => generarNoticias(data))
        .catch(error => {});
}

function generarNoticias(json) {
    const tabla = document.getElementById("tabla_tecnologia");

    for (let i = 0; i < 25; i++) {

        console.log(json)
        tabla.innerHTML += `<hr><tr>
                        <td>${json[i].titulo}</td>
                        </tr>`
    }
}
cargarJsonTecnologia();