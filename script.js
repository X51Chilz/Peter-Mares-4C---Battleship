const x = document.getElementById("hrac1");

const table = document.createElement("table");

for (let i = 1; i <= 6; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= 6; j++) {
        const cell = document.createElement("td");
        const e = document.createElement("button");
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
        cell.appendChild(e);
        row.appendChild(cell);
    }

    table2.appendChild(row);
}

y.appendChild(table2);