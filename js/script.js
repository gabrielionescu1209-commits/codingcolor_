let colori = [];
// Mostra data e ora attuali nell'elemento saluto
let d=new Date();
document.getElementById("saluto").innerHTML="oggi è il "+ d.toLocaleString();

// Legge input e testo, controlla che il numero sia valido (0-255) e applica il colore rgb dopo 3 inserimenti
function elabora(){
    let inputNum= document.getElementById("numero").value.trim();
    let numero= Number(inputNum);
    let testo= document.getElementById("testo").value;

    if(inputNum!== "" && !isNaN(numero) && Number.isInteger(numero) && numero>=0 && numero<=255){
        if(colori.length<3){
            colori.push(numero);
            if(testo!==""){
                document.getElementById("testoColorato").innerHTML=testo;
            }
            document.getElementById("titolo").innerHTML = "hai inserito il numero: " + numero + "<br>i colori inseriti sono: " + colori.join(",");
            document.getElementById("numero").value= "";
            if (colori.length===3) {
                let newColor=`rgb(${colori[0]},${colori[1]},${colori[2]})`;
                document.getElementById("testoColorato").style.color=newColor;
                document.getElementById("titolo").innerHTML +="<br>colore finale applicato: <b>" + newColor + "</b>";
            }
        } else{
            alert("hai già inserito 3 numeri. premi pulisci per ricominciare.");
        }
    } else{
        alert("il numero inserito non va bene: deve essere un numero intero tra 0 e 255.");
    }
}
// Ripristina campi, testi, colore e array allo stato iniziale
function pulisci() {
    document.getElementById("numero").value= "";
    document.getElementById("testo").value= "";
    document.getElementById("titolo").innerHTM = "numeri inseriti";
    document.getElementById("testoColorato").innerHTML= "testo colorato";
    document.getElementById("testoColorato").style.color= "black";
    colori= [];
}
