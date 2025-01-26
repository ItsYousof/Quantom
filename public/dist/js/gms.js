async function loadGames() {
    let gms = await fetch('../dist/data/gms.json');
    gms = await gms.json();

    let games = document.getElementById('gms-container');
    gms.forEach(game => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${game.img}" alt="${game.name}">
            <h3>${game.name}</h3>
            <p>${game.desc}</p>
            <a href="${__uv$config.prefix + __uv$config.encodeUrl(game.url)}">Play</a>
        `;
        games.appendChild(card);
    });

    let gms_search = document.getElementById('gms-s');
    gms_search.focus();
}

document.addEventListener('DOMContentLoaded', loadGames);

let gms_search = document.getElementById('gms-s');

gms_search.addEventListener('input', () => {
    let value = gms_search.value.toLowerCase();
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(value)) {
            card.classList.remove('hidden'); // Show the card (fade in)
        } else {
            card.classList.add('hidden'); // Hide the card (fade out)
        }
    }
});
