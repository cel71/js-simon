document.addEventListener("DOMContentLoaded", function () {

    var numberComputer = [];

    while (numberComputer.length < 5) {
        var random = Math.floor(Math.random() * 100) + 1;
        if (!numberComputer.includes(random)) {
            numberComputer.push(random);
        }
    }
    console.log(numberComputer);
    alert(numberComputer + " Memorizzali e attendi 30 secondi");

    setTimeout (function () {

        var numberUser = [];
        var check = false;

        while (numberUser.length < 5) {
            var user = parseInt(prompt("Inserisci i 5 numeri generati dal computer"));
            numberUser.push(user);
            for (var x = 0; x <= numberUser.length; x++) {
                if (numberUser[x] === numberComputer.length) {
                    check = true;
                    break;
                } 
            }
        }

        if (!check) {
            alert("HAI VINTO" + " quanti numeri inseriti : " + numberUser.length + " quali numeri inseriti : " + numberUser);
        } else {
            alert("HAI PERSO" + " quanti numeri inseriti : " + numberUser.length + " quali numeri inseriti : " + numberUser);
        }

    }, 3000);



});