// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    var input = document.getElementById('amigo').value;
    if (input === '') {
        alert('Alerta, la casilla está vacía');
        return; // Salir de la función si el campo está vacío
    }
    var lista = document.getElementById('listaAmigos');
    var nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = input;
    lista.appendChild(nuevoAmigo);
    document.getElementById('amigo').value = ''; // Limpiar el campo de entrada después de agregar el nombre
}


function sortearAmigo() {
    var lista = document.getElementById('listaAmigos').getElementsByTagName('li');
    if (lista.length === 0) {
        alert('La lista de amigos está vacía');
        return; // Salir de la función si la lista está vacía
    }
    var indiceAleatorio = Math.floor(Math.random() * lista.length);
    var amigoSorteado = lista[indiceAleatorio].textContent;
    var resultado = document.getElementById('resultado');
    
    // Limpiar la lista de resultados antes de mostrar el nuevo resultado
    resultado.innerHTML = '';
    
    var nuevoResultado = document.createElement('li');
    nuevoResultado.textContent = 'El amigo sorteado es ' + amigoSorteado;
    resultado.appendChild(nuevoResultado);
}
