const fs = require('fs')

let redirectArray = []

fs.readFile('./redirects/redirectsInput.txt', (err, data) => {
    if (err) throw err;

    let input = data.toString().split(/\r?\n/);

    for (let i = 3; i < input.length; i++) {
        let redirectRule = input[i].split(' , ');
        redirectArray.push({
            from: redirectRule[0],
            to: redirectRule[1]
        })
    }
    console.log(input);

    let jsonContent = JSON.stringify(redirectArray, null, "\t");

    fs.writeFile("./redirects/redirects.json", jsonContent, 'utf8', function (err) {
        if (err) throw err;

        console.log("Update Succesful");
    });
})

