let time = document.getElementById('clock');

function updateClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    time.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

updateClock();
setInterval(updateClock, 1000);

let search = document.getElementById('home-s');

search.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let query = search.value;
        if (query != '') {
            if (query.startsWith('http://') || query.startsWith('https://')) {
                window.location.href = __uv$config.prefix + __uv$config.encodeUrl(query);
            } else {
                window.location.href = __uv$config.prefix + __uv$config.encodeUrl('https://www.google.com/search?q=' + query);
            }
        }
    }
});