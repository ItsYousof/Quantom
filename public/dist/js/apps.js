async function loadApps() {
    let apps = await fetch('../dist/data/apps.json');
    apps = await apps.json();

    let apps_ = document.getElementById('apps-container');
    apps.forEach(app => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${app.img}" alt="${app.name}">
            <h3>${app.name}</h3>
            <p>${app.desc}</p>
            <a href="${__uv$config.prefix + __uv$config.encodeUrl(app.url)}">Go</a>
        `;
        apps_.appendChild(card);
    });

    let apps_search = document.getElementById('apps-s');
    apps_search.focus();
}

document.addEventListener('DOMContentLoaded', loadApps);

let apps_search = document.getElementById('apps-s');

apps_search.addEventListener('input', () => {
    let value = apps_search.value.toLowerCase();
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