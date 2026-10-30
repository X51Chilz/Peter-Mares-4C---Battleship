let kolo = 0;
let vystreleno = false;
const btnHotovo = document.getElementById("btn-hotovo");
const btnPripraven = document.getElementById("btn-pripraven");


// ----------------------------------------lodě pro hráče 1
let ax1 = Math.floor((Math.random() * 6) + 1);
let ay1 = Math.floor((Math.random() * 6) + 1);
let rand1 = Math.floor((Math.random() * 2) + 1);
let ax11;
let ay11;
if (rand1 === 1) {
    ay11 = ay1;
    ax11 = ax1 - 1;
    if (ax11 < 1) {
        ax11 = ax1 + 1;
    }
}
if (rand1 === 2) {
    ax11 = ax1;
    ay11 = ay1 - 1;
    if (ay11 < 1) {
        ay11 = ay1 + 1;
    }
}

let ax2 = Math.floor(Math.random() * 6) + 1;
while (ax2 === ax1 || ax2 === ax11) {
    ax2 = Math.floor(Math.random() * 6) + 1;
}

let ay2 = Math.floor(Math.random() * 6) + 1;
while (ay2 === ay1 || ay2 === ay11) {
    ay2 = Math.floor(Math.random() * 6) + 1;
}
let ax22;
let ay22;
let rand2 = Math.floor((Math.random() * 2) + 1);
if (rand2 === 1) {
    ay22 = ay2;
    ax22 = ax2 - 1;
    if (ax22 < 1) {
        ax22 = ax2 + 1;
    }
}
if (rand2 === 2) {
    ax22 = ax2;
    ay22 = ay2 - 1;
    if (ay22 < 1) {
        ay22 = ay2 + 1;
    }
}

let ax3 = Math.floor(Math.random() * 6) + 1;
while (ax3 === ax1 || ax3 === ax2 || ax3 === ax11 || ax3 === ax22) {
    ax3 = Math.floor(Math.random() * 6) + 1;
}

let ay3 = Math.floor(Math.random() * 6) + 1;
while (ay3 === ay1 || ay3 === ay2 || ay3 === ay11 || ay3 === ay22) {
    ay3 = Math.floor(Math.random() * 6) + 1;
}

let ax33;
let ay33;
let rand3 = Math.floor((Math.random() * 2) + 1);
if (rand3 === 1) {
    ay33 = ay3;
    ax33 = ax3 - 1;
    if (ax33 < 1) {
        ax33 = ax3 + 1;
    }
}
if (rand3 === 2) {
    ax33 = ax3;
    ay33 = ay3 - 1;
    if (ay33 < 1) {
        ay33 = ay3 + 1;
    }
}

// --------------------------------------------lodě pro hráče 2

//---------------------------------------------------
let bx1 = Math.floor((Math.random() * 6) + 1);
let by1 = Math.floor((Math.random() * 6) + 1);
let rand4 = Math.floor((Math.random() * 2) + 1);
let bx11;
let by11;
if (rand4 === 1) {
    by11 = by1;
    bx11 = bx1 - 1;
    if (bx11 < 1) {
        bx11 = bx1 + 1;
    }
}
if (rand4 === 2) {
    bx11 = bx1;
    by11 = by1 - 1;
    if (by11 < 1) {
        by11 = by1 + 1;
    }
}

let bx2 = Math.floor(Math.random() * 6) + 1;
while (bx2 === bx1 || bx2 === bx11) {
    bx2 = Math.floor(Math.random() * 6) + 1;
}

let by2 = Math.floor(Math.random() * 6) + 1;
while (by2 === by1 || by2 === by11) {
    by2 = Math.floor(Math.random() * 6) + 1;
}
let bx22;
let by22;
let rand5 = Math.floor((Math.random() * 2) + 1);
if (rand5 === 1) {
    by22 = by2;
    bx22 = bx2 - 1;
    if (bx22 < 1) {
        bx22 = bx2 + 1;
    }
}
if (rand5 === 2) {
    bx22 = bx2;
    by22 = by2 - 1;
    if (by22 < 1) {
        by22 = by2 + 1;
    }
}

let bx3 = Math.floor(Math.random() * 6) + 1;
while (bx3 === bx1 || bx3 === bx2 || bx3 === bx11 || bx3 === bx22) {
    bx3 = Math.floor(Math.random() * 6) + 1;
}

let by3 = Math.floor(Math.random() * 6) + 1;
while (by3 === by1 || by3 === by2 || by3 === by11 || by3 === by22) {
    by3 = Math.floor(Math.random() * 6) + 1;
}

let bx33;
let by33;
let rand6 = Math.floor((Math.random() * 2) + 1);
if (rand6 === 1) {
    by33 = by3;
    bx33 = bx3 - 1;
    if (bx33 < 1) {
        bx33 = bx3 + 1;
    }
}
if (rand6 === 2) {
    bx33 = bx3;
    by33 = by3 - 1;
    if (by33 < 1) {
        by33 = by3 + 1;
    }
}
// ---------------------------cíle hráč 1
const k = document.getElementById("hrac1-cile");

const table3 = document.createElement("table");

for (let i = 1; i <= 6; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= 6; j++) {
        const cell = document.createElement("td");
        const e = document.createElement("button");

        if ((i === ay1 && j === ax1)) {
            e.dataset.lod = "true";
        }
        if ((i === ay11 && j === ax11)) {
            e.dataset.lod = "true";
        }
        if ((i === ay2 && j === ax2)) {
            e.dataset.lod = "true";
        }
        if ((i === ay22 && j === ax22)) {
            e.dataset.lod = "true";
        }
        if ((i === ay3 && j === ax3)) {
            e.dataset.lod = "true";
        }
        if ((i === ay33 && j === ax33)) {
            e.dataset.lod = "true";
        }
        e.addEventListener("click", function () {
            if (kolo % 2 === 0) return;
            if (vystreleno) return;
            if (e.style.backgroundColor === "red" || e.style.backgroundColor === "green") {
                return;
            }
            const mainButton = document.getElementById("h1-" + i + "-" + j);
            if (e.dataset.lod === "true") {
                e.style.backgroundColor = "green";
                mainButton.style.backgroundColor = "green";

                if (
                    document.getElementById("h1-" + ay1 + "-" + ax1).style.backgroundColor === "green" &&
                    document.getElementById("h1-" + ay11 + "-" + ax11).style.backgroundColor === "green" &&
                    document.getElementById("h1-" + ay2 + "-" + ax2).style.backgroundColor === "green" &&
                    document.getElementById("h1-" + ay22 + "-" + ax22).style.backgroundColor === "green" &&
                    document.getElementById("h1-" + ay3 + "-" + ax3).style.backgroundColor === "green" &&
                    document.getElementById("h1-" + ay33 + "-" + ax33).style.backgroundColor === "green"
                ) {
                    alert("hráč 2 vyhrál");
                }
            } else {
                e.style.backgroundColor = "red";
                mainButton.style.backgroundColor = "red";
            }
            vystreleno = true;
            btnHotovo.style.display = "block";
        });
        cell.appendChild(e);
        row.appendChild(cell);
    }
    table3.appendChild(row);
}
k.appendChild(table3);
//----------------------------cíle hráč 2
const l = document.getElementById("hrac2-cile");

const table4 = document.createElement("table");

for (let i = 1; i <= 6; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= 6; j++) {
        const cell = document.createElement("td");
        const e = document.createElement("button");

        if ((i === by1 && j === bx1)) {
            e.dataset.lod = "true";
        }
        if ((i === by11 && j === bx11)) {
            e.dataset.lod = "true";
        }
        if ((i === by2 && j === bx2)) {
            e.dataset.lod = "true";
        }
        if ((i === by22 && j === bx22)) {
            e.dataset.lod = "true";
        }
        if ((i === by3 && j === bx3)) {
            e.dataset.lod = "true";
        }
        if ((i === by33 && j === bx33)) {
            e.dataset.lod = "true";
        }
        e.addEventListener("click", function () {
            if (kolo % 2 === 1) return;
            if (vystreleno) return;
            if (e.style.backgroundColor === "red" || e.style.backgroundColor === "green") {
                return;
            }
            const mainButton = document.getElementById("h2-" + i + "-" + j);
            if (e.dataset.lod === "true") {
                e.style.backgroundColor = "green";
                mainButton.style.backgroundColor = "green";

                if (
                    document.getElementById("h2-" + by1 + "-" + bx1).style.backgroundColor === "green" &&
                    document.getElementById("h2-" + by11 + "-" + bx11).style.backgroundColor === "green" &&
                    document.getElementById("h2-" + by2 + "-" + bx2).style.backgroundColor === "green" &&
                    document.getElementById("h2-" + by22 + "-" + bx22).style.backgroundColor === "green" &&
                    document.getElementById("h2-" + by3 + "-" + bx3).style.backgroundColor === "green" &&
                    document.getElementById("h2-" + by33 + "-" + bx33).style.backgroundColor === "green"
                ) {
                    alert("hráč 1 vyhrál");
                }
            } else {
                e.style.backgroundColor = "red";
                mainButton.style.backgroundColor = "red";
            }
            vystreleno = true;
            btnHotovo.style.display = "block";
        });
        cell.appendChild(e);
        row.appendChild(cell);
    }
    table4.appendChild(row);
}
l.appendChild(table4);
// ---------------------------pole hráč 1

const x = document.getElementById("hrac1");

const table = document.createElement("table");

for (let i = 1; i <= 6; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= 6; j++) {
        const cell = document.createElement("td");
        const e = document.createElement("button");
        e.id = "h1-" + i + "-" + j;

        if ((i === ay1 && j === ax1)) {
            e.style.backgroundColor = "blue";
        }
        if ((i === ay11 && j === ax11)) {
            e.style.backgroundColor = "blue";
        }
        if ((i === ay2 && j === ax2)) {
            e.style.backgroundColor = "blue";
        }
        if ((i === ay22 && j === ax22)) {
            e.style.backgroundColor = "blue";
        }
        if ((i === ay3 && j === ax3)) {
            e.style.backgroundColor = "blue";
        }
        if ((i === ay33 && j === ax33)) {
            e.style.backgroundColor = "blue";
        }
        cell.appendChild(e);
        row.appendChild(cell);
    }

    table.appendChild(row);
}

x.appendChild(table);


// ---------------------------------------pole hráč 2
const y = document.getElementById("hrac2");

const table2 = document.createElement("table");

for (let i = 1; i <= 6; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= 6; j++) {
        const cell = document.createElement("td");
        const e = document.createElement("button");
        e.id = "h2-" + i + "-" + j;

        if ((i === by1 && j === bx1)) {
            e.style.backgroundColor = "blue";
        }
        if ((i === by11 && j === bx11)) {
            e.style.backgroundColor = "blue";
        }
        if ((i === by2 && j === bx2)) {
            e.style.backgroundColor = "blue";
        }
        if ((i === by22 && j === bx22)) {
            e.style.backgroundColor = "blue";
        }
        if ((i === by3 && j === bx3)) {
            e.style.backgroundColor = "blue";
        }
        if ((i === by33 && j === bx33)) {
            e.style.backgroundColor = "blue";
        }
        cell.appendChild(e);
        row.appendChild(cell);
    }

    table2.appendChild(row);
}

y.appendChild(table2);

function prepniKolo() {
    if (kolo % 2 === 0) {
        x.style.display = "flex";
        l.style.display = "flex";
        y.style.display = "none";
        k.style.display = "none";
    } else {
        x.style.display = "none";
        l.style.display = "none";
        y.style.display = "flex";
        k.style.display = "flex";
    }
}

btnHotovo.addEventListener("click", function () {
    x.style.display = "none";
    y.style.display = "none";
    k.style.display = "none";
    l.style.display = "none";
    btnHotovo.style.display = "none";
    btnPripraven.style.display = "block";
});

btnPripraven.addEventListener("click", function () {
    btnPripraven.style.display = "none";
    kolo++;
    vystreleno = false;
    prepniKolo();
});

prepniKolo();


