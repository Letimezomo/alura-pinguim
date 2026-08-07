// Lista de perguntas e respostas
const fatos = [
    {
        pergunta: "Pinguins conseguem voar no ar igual a outras aves?",
        eVerdadeiro: false,
        explicacao: "FALSO! Pinguins não voam no ar. Suas asas evoluíram para funcionar como nadadeiras debaixo d'água."
    },
    {
        pergunta: "Todos os pinguins vivem apenas no gelo e na Antártida?",
        eVerdadeiro: false,
        explicacao: "FALSO! Existem pinguins em praias quentes da África do Sul e até nas Ilhas Galápagos!"
    },
    {
        pergunta: "O Pinguim-Imperador é a maior espécie de pinguim do mundo?",
        eVerdadeiro: true,
        explicacao: "VERDADEIRO! Eles podem medir mais de 1,10 metro de altura e pesar mais de 35 kg."
    },
    {
        pergunta: "Pinguins conseguem beber água do mar?",
        eVerdadeiro: true,
        explicacao: "VERDADEIRO! Eles têm uma glândula especial perto dos olhos que filtra o sal da água do mar."
    }
];

let indiceAtual = 0;

// Vira o card mostrando o verso
function virarCard() {
    const card = document.getElementById('flashcard');
    card.classList.toggle('flipped');
}

// Atualiza o texto com a pergunta atual
function atualizarCard() {
    const fato = fatos[indiceAtual];
    document.getElementById('titulo-pergunta').innerText = fato.pergunta;
    document.getElementById('texto-explicacao').innerText = fato.explicacao;
    
    const tag = document.getElementById('status-tag');
    if (fato.eVerdadeiro) {
        tag.innerText = "VERDADEIRO";
        tag.className = "tag-resposta tag-verdadeiro";
    } else {
        tag.innerText = "FALSO";
        tag.className = "tag-resposta tag-falso";
    }
}

// Passa para o próximo fato
function proximaPergunta(event) {
    event.stopPropagation(); // Evita virar o card ao clicar no botão
    
    const card = document.getElementById('flashcard');
    
    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        setTimeout(() => {
            indiceAtual = (indiceAtual + 1) % fatos.length;
            atualizarCard();
        }, 300);
    } else {
        indiceAtual = (indiceAtual + 1) % fatos.length;
        atualizarCard();
    }
}

// Carrega os dados da primeira pergunta
atualizarCard();