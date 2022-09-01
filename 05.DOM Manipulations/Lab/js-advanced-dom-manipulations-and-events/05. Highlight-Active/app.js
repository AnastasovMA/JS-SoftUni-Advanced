function focused() {
    let h1Elements = document.querySelectorAll('input[type="text"]');
    for (const el of h1Elements) {
        el.addEventListener('focus', (e) => {
            e.currentTarget.parentElement.classList.add('focused');
        })
        el.addEventListener('blur', (e) => {
            e.currentTarget.parentElement.classList.remove('focused');
        })
    }
}