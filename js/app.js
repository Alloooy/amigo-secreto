let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value.trim() === '') {
        alert('Insira um nome para sortear!');
        return;
    }

    if (amigos.includes(amigo.value.trim())) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(amigo.value.trim());
    atualizarLista();
    amigo.value = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';
    amigos.sort().forEach((amigo, indice) => {
        lista.innerHTML += `${indice + 1}. ${amigo}<br/>`;
    });
}

function sortear() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois nomes para realizar o sorteio.');
        return;
    }

    embaralha(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let amigoAtual = amigos[i];
        let amigoSorteado = i === amigos.length - 1 ? amigos[0] : amigos[i + 1];
        sorteio.innerHTML += `${amigoAtual} --> ${amigoSorteado}<br/>`;
    }
}

function embaralha(lista) {
    for (let i = lista.length; i; i--) {
        const indiceAleatorio = Math.floor(Math.random() * i);
        [lista[i - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i - 1]];
    }
}

function remover() {
    let amigo = document.getElementById('nome-amigo').value.trim();
    if (amigo === '') {
        alert('Insira um nome para remover.');
        return;
    }

    const indice = amigos.indexOf(amigo);
    if (indice === -1) {
        alert('Nome não encontrado na lista.');
        return;
    }

    amigos.splice(indice, 1);
    atualizarLista();
    document.getElementById('nome-amigo').value = '';
}

function reiniciar() {
    if (confirm('Tem certeza que deseja reiniciar o sorteio? Isso removerá todos os nomes e resultados.')) {
        amigos = [];
        document.getElementById('lista-amigos').innerHTML = '';
        document.getElementById('lista-sorteio').innerHTML = '';
    }
}

function sortearAleatorio() {
    if (amigos.length === 0) {
        alert('Adicione amigos para sortear.');
        return;
    }

    let sorteio = document.getElementById('lista-sorteio');
    const amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
    sorteio.innerHTML = `O amigo sorteado é: ${amigoAleatorio}`;
}