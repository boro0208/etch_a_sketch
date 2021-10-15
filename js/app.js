const container = document.querySelector(".container");

const button = document.createElement("button");
button.setAttribute("id","removeColor");
button.classList.add(".dugme");
button.setAttribute("style","background-color: blue; color: white; margin: 10px; padding: 10px 30px;");
button.textContent = "Clear";
container.appendChild(button);

function createGrid(b = 16,c = 16){
    if(b > 99 || c > 99){
        b = 16;
        c = 16;
    }
    for (let i = 0; i < b; i++) {
        const divRow = document.createElement("div");
        divRow.classList.add("row");
        for (let a = 0; a < c; a++) {
            const divCell = document.createElement("div");
            divCell.classList.add("cell");
            divCell.setAttribute("id",i+'a'+a);
            divCell.setAttribute("style","width: "+ 800/b+"px; height:"+800/c +"px;");
            divRow.appendChild(divCell);
        }
        container.appendChild(divRow);
    }
}
createGrid();

function addColor(e) {
    const key = document.querySelector(`[id="${e.target.id}"]`);
    if (!key) return;
    key.classList.add('colored');
}

document.getElementById("removeColor").addEventListener("click", function() {
// const cells = Array.from(document.querySelectorAll('.cell'));
// cells.forEach(cell => cell.classList.remove('colored'));

    const elements = document.getElementsByClassName("row");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

    a = prompt("Enter the number :");
    createGrid(a,a);
});

window.addEventListener('mouseover', addColor);
