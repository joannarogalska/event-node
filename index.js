var fs = require('fs');

fs.readdir('/', function(err, items) {
    console.log('test',items);

    var fileContent = 'To jest zawartość katalogu:\n';

    for (var i=0; i<items.length; i++) {
        fileContent += items[i] + '\n';
    }

    fs.writeFile('./tekst.txt',  fileContent, function(err) {
        if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
    });
});