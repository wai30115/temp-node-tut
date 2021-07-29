const {
    readFile,
    writeFile,
} = require('fs');


readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            return
        };
        const second = result;
        writeFile('./content/result-sync.txt', `the result : ${first},${second}`, {
            flag: 'a'
        }, (err, result) => {
            if (err) {
                return;
            }
            console.log(result);
        });
    });
});