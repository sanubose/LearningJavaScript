let n = 5; // Number of rows

for (let i = n; i >= 1; i--) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
