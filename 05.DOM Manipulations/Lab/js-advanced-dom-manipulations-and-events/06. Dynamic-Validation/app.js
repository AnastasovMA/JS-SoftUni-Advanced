function validate() {
    let emailElement = document.getElementById('email');

    emailElement.addEventListener('change', (e) => {
        let pattern = /[a-z]+@[a-z]+\.[a-z]+/g;

        if (pattern.test(emailElement.value)) {
            e.currentTarget.classList = '';
        }else{
            e.currentTarget.classList = 'error';
        }
    })
}