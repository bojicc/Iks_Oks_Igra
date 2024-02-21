const eigrac = document.getElementById("igrac");
const etabla = document.getElementById("tabla");
const erez = document.getElementById("rez");

let naPotezu = "X";
let tabla = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
let brPoteza = 9;
let krajIgre = false;




function ispis() {
    etabla.innerHTML = "";
    for (let i = 0; i < tabla.length; i++) {
        for (let j = 0; j < tabla[i].length; j++) {
            etabla.innerHTML += `
                <div class="polje" onclick="potez(${i}, ${j})"> 
                    ${tabla[i][j]} 
                <div>
            `  
        }
    }
}

function provera() {
    if      (tabla[0][0] != "" && tabla[0][0] == tabla[0][1] && tabla[0][0] == tabla[0][2] ) return true;
    else if (tabla[1][0] != "" && tabla[1][0] == tabla[1][1] && tabla[1][0] == tabla[1][2] ) return true;
    else if (tabla[2][0] != "" && tabla[2][0] == tabla[2][1] && tabla[2][0] == tabla[2][2] ) return true;

    else if (tabla[0][0] != "" && tabla[0][0] == tabla[1][0] && tabla[0][0] == tabla[2][0] ) return true;
    else if (tabla[0][1] != "" && tabla[0][1] == tabla[1][1] && tabla[0][1] == tabla[2][1] ) return true;
    else if (tabla[0][2] != "" && tabla[0][2] == tabla[1][2] && tabla[0][2] == tabla[2][2] ) return true;

    else if (tabla[0][0] != "" && tabla[0][0] == tabla[1][1] && tabla[0][0] == tabla[2][2] ) return true;
    else if (tabla[0][2] != "" && tabla[0][2] == tabla[1][1] && tabla[0][2] == tabla[2][0] ) return true;

    return false;
}

function potez(i, j) {
    if(tabla[i][j] == "" && !krajIgre){
        tabla[i][j] = naPotezu;
        console.table(tabla);
        ispis();
        brPoteza--;
        if (provera()){
            erez.innerText = `Pobednik je ${naPotezu}`; 
            krajIgre = true;
        }
        else if (brPoteza == 0){
            erez.innerText = `Rezultat je neresen`; 
            krajIgre = true;    
        }
        naPotezu == "X" ? naPotezu = "O" : naPotezu = "X";
        eigrac.innerText = naPotezu;
    }
}

function novaIgra() {
    naPotezu = "X";
    eigrac.innerText = naPotezu;
    erez.innerText = "";
    tabla = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
    brPoteza = 9;
    krajIgre = false;
    ispis();
}

novaIgra();