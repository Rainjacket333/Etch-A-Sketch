const divCont = document.querySelector('#container');
const bigCont = document.querySelector('#bigCont');
const refresh = document.createElement('button');
refresh.textContent = 'Refresh';
bigCont.insertBefore(refresh, divCont);
refresh.style.marginRight = '100px';

function createGrid(size) {
    divCont.replaceChildren();
    divCont.style.setProperty('--items-per-row', size);
    const total = size * size;

    for (let i = 0; i < total; i++) {
        const cell = document.createElement('div');
        cell.style.opacity = 0.1;
        cell.addEventListener('mouseenter', () => {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            cell.style.backgroundColor = randomColor;
            let currentOpacity = parseFloat(window.getComputedStyle(cell).opacity);
            cell.style.opacity = currentOpacity + 0.1;
        });
        divCont.append(cell);
    }
}

createGrid(16);

refresh.addEventListener('click', () => {
    const input = prompt('Choose grid square count: (max 100)', '16');
    const size = Number(input);

    if (!Number.isInteger(size) || size < 1 || size > 100) {
        alert('Please enter a whole number between 1 and 100.');
        return;
    }

    createGrid(size);
});


