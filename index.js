document.addEventListener('DOMContentLoaded',() => {
    let outer = document.getElementById('outer');
    let chance = false; // when chance is false we put O, when chance is true we put X

    outer.addEventListener("click", (e) => {
        let cell = e.target;
        let cellNumber = cell.getAttribute('data-cell');

        if(cell.getAttribute('data-clicked')) {
            return;
        }
        cell.setAttribute('data-clicked', 'true');
        if(chance == true) {
            cell.textContent = 'X';
        }else {
            cell.textContent = 'O';
        }

        chance = !chance;
    })
})