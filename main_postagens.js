function doGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function createLine(usuario) {
    console.log(usuario)
    line = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdTitle = document.createElement("td");
    tdBody = document.createElement("td");
    tdId.innerHTML = usuario.userId
    tdNome.innerHTML = usuario.id
    tdTitle.innerHTML = usuario.title
    tdBody.innerHTML = usuario.body


    line.appendChild(tdId);
    line.appendChild(tdNome);
    line.appendChild(tdTitle);
    line.appendChild(tdBody);

    return line;
}

function main() {
    let data = doGet("https://jsonplaceholder.typicode.com/posts/");
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela");

    usuarios.forEach(element => {
        let line = createLine(element);
        tabela.appendChild(line);
    });
}

main()