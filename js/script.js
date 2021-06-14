document.addEventListener("DOMContentLoaded", function () {

    var numberComputer = [];

    while (numberComputer.length < 5) {
        var random = Math.floor(Math.random() * 100) + 1;
        if (!numberComputer.includes(random)) {
            numberComputer.push(random);
        }
    }
    console.log(numberComputer);
    alert (numberComputer + " Memorizzali e attendi 30 secondi");

    var numberUser = [];

    setTimeout(function() {
        for (var x = 0; x < 5; x++) {
          var user = parseInt(prompt("Inserisci i 5 numeri generati dal computer"));
          if (user === numberComputer[x]) {
            numberUser.push(user);
          }
        }

        alert("Quanti numeri hai indovinato: " + numberUser.length + " quali sono i numeri che hai inserito: " + numberUser);

    }, 30000)

});