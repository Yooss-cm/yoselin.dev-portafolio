const palabras = ["Desarrolladora Full Stack", "Desarrolladora móvil", "Freelancer", "Consultora de Sistemas"];
let i = 0;
let j = 0;
let currentWord = [];
let isDeleting = false;
let isEnd = false;

function loop() {
    isEnd = false;
    document.getElementById('typed-text').innerHTML = currentWord.join('');

    if (i < palabras.length) {

        if (!isDeleting && j <= palabras[i].length) {
            currentWord.push(palabras[i][j]);
            j++;
            document.getElementById('typed-text').innerHTML = currentWord.join('');
        }

        if (isDeleting && j <= palabras[i].length) {
            currentWord.pop();
            j--;
            document.getElementById('typed-text').innerHTML = currentWord.join('');
        }

        if (j == palabras[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentWord = [];
            isDeleting = false;
            i++;
            if (i === palabras.length) {
                i = 0;
            }
        }
    }

    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (200 - 100) + 100;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
}

loop();
