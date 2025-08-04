// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const ulLista = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = "";
    input.focus();
    ulResultado.innerHTML = "";
}

function mostrarLista() {
    ulLista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${i + 1}. ${amigos[i]}`;
        ulLista.appendChild(li);
    }
}


