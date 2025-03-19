const participantForm = document.getElementById('participantForm');
const participantList = document.getElementById('participantList');
const participantNameInput = document.getElementById('participantName');
const drawButton = document.getElementById('drawButton');
const resultParagraph = document.getElementById('result');
let participants = [];

// Adiciona participantes
participantForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = participantNameInput.value.trim();
    if (name && !participants.includes(name)) {
        participants.push(name);
        updateParticipantList();
        participantNameInput.value = '';

        // Habilita o botão de sorteio se houver pelo menos 2 participantes
        drawButton.disabled = participants.length < 2;
    } else {
        alert('Nome inválido ou já adicionado.');
    }
});

// Atualiza a lista de participantes
function updateParticipantList() {
    participantList.innerHTML = '';
    participants.forEach(function(name) {
        const li = document.createElement('li');
        li.textContent = name;
        participantList.appendChild(li);
    });
}

// Função que realiza o sorteio
drawButton.addEventListener('click', function() {
    if (participants.length < 2) {
        alert('Adicione pelo menos 2 participantes para o sorteio.');
        return;
    }

    // Embaralha os participantes
    let shuffled = participants.slice().sort(() => Math.random() - 0.5);
    let sorteios = [];
    for (let i = 0; i < shuffled.length; i++) {
        let amigo = shuffled[(i + 1) % shuffled.length];
        sorteios.push(`${shuffled[i]} → ${amigo}`);
    }
    resultParagraph.innerHTML = sorteios.join('<br>');
});
