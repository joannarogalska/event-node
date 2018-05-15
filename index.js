var fs = require('fs');

fs.readdir('/', function(err, items) {

    for (var i=0; i<items.length; i++) {
        fs.writeFile('./tekst.txt', 'To jest zawartość katalogu:\n' + items, function(err) {
            if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
        });
    }
});