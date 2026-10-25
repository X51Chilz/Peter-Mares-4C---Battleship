const x = document.getElementById("hrac1");

const table = document.createElement("table");
let ax1 = Math.floor((Math.random() * 6) + 1);;
let ay1 = Math.floor((Math.random() * 6) + 1);;

let ax2 = Math.floor(Math.random() * 6) + 1;
while (ax2 === ax1) {
    ax2 = Math.floor(Math.random() * 6) + 1;
}

let ay2 = Math.floor(Math.random() * 6) + 1;
while (ay2 === ay1) {
    ay2 = Math.floor(Math.random() * 6) + 1;
}

let ax3 = Math.floor(Math.random() * 6) + 1;
while (ax3 === ax1 || ax3 === ax2) {
    ax3 = Math.floor(Math.random() * 6) + 1;
}

let ay3 = Math.floor(Math.random() * 6) + 1;
while (ay3 === ay1 || ay3 === ay2) {
    ay3 = Math.floor(Math.random() * 6) + 1;
}

let bx1 = Math.floor((Math.random() * 6) + 1);
let by1 = Math.floor((Math.random() * 6) + 1);

let bx2 = Math.floor(Math.random() * 6) + 1;
while (bx2 === bx1) {
    bx2 = Math.floor(Math.random() * 6) + 1;
}

let by2 = Math.floor(Math.random() * 6) + 1;
while (by2 === by1) {
    by2 = Math.floor(Math.random() * 6) + 1;
}

let bx3 = Math.floor(Math.random() * 6) + 1;
while (bx3 === bx1 || bx3 === bx2) {
    bx3 = Math.floor(Math.random() * 6) + 1;
}

let by3 = Math.floor(Math.random() * 6) + 1;
while (by3 === by1 || by3 === by2) {
    by3 = Math.floor(Math.random() * 6) + 1;
}


for (let i = 1; i <= 6; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= 6; j++) {
        const cell = document.createElement("td");
        const e = document.createElement("button");
        e.addEventListener("click", function() {
            e.style.backgroundColor = "red";
        });
        if ((i === ay1 && j === ax1)) {
            e.style.backgroundColor = "blue";
        }
        if ((i === ay2 && j === ax2)) {
            e.style.backgroundColor = "blue";
        }
        if ((i === ay3 && j === ax3)) {
            e.style.backgroundColor = "blue";
        }
        cell.appendChild(e);
        row.appendChild(cell);
    }

    table.appendChild(row);
}

x.appendChild(table);

const y = document.getElementById("hrac2");

const table2 = document.createElement("table");

for (let i = 1; i <= 6; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= 6; j++) {
        const cell = document.createElement("td");
        const e = document.createElement("button");
        e.addEventListener("click", function() {
            e.style.backgroundColor = "red";
        });
        if ((i === by1 && j === bx1)) {
            e.style.backgroundColor = "blue";
        }
        if ((i === by2 && j === bx2)) {
            e.style.backgroundColor = "blue";
        }
        if ((i === by3 && j === bx3)) {
            e.style.backgroundColor = "blue";
        }
        cell.appendChild(e);
        row.appendChild(cell);
    }

    table2.appendChild(row);
}

y.appendChild(table2);