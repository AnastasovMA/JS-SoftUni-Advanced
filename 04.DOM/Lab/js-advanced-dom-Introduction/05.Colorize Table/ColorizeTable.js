function colorize() {
    let rows = document.querySelectorAll('tr:nth-of-type(2n)');
    for (const row of rows) {
        row.style.background = 'teal';
    }
}