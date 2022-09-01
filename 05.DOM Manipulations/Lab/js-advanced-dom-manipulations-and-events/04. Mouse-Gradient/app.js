function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let result = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (e) => {
        percent = Math.floor((e.offsetX / gradientElement.clientWidth) * 100);
        result.textContent = `${percent}%`;
    })
}