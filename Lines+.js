let num = 5;
let line = "";
for (let x = 0; x < num * 2; x++) {
    if (x < num) {
        line += "+";
    }
    else
    {
        console.log(line);
    }
}