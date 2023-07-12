const agentes = document.querySelectorAll('.agente');
console.log(agentes)

agentes.forEach((agente) => {
    agente.addEventListener('mouseenter', () => {
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior:'smooth'});
        }

        const agenteSelecionado = document.querySelector('.selecionado');
        agenteSelecionado.classList.remove('selecionado');
        agente.classList.add('selecionado');

        const imagemAgenteGrande = document.querySelector('.agente-grande');
        console.log(imagemAgenteGrande)

        const idAgente = agente.attributes.id.value;
        imagemAgenteGrande.src = `./src/imagens/card-${idAgente}.png`;

        const nomeAgente = document.getElementById('nome-agente');
        nomeAgente.innerText = agente.getAttribute('data-name');

        const descricaoAgente = document.getElementById('descricao-agente');
        descricaoAgente.innerText = agente.getAttribute('data-description');

    })
})
