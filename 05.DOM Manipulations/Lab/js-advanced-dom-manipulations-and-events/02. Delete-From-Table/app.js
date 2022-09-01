function deleteByEmail() {
    let emailElements = document.querySelectorAll('tbody tr td:nth-of-type(2n)');
    let inputElement = document.querySelector('input[name="email"]');
    let result = document.getElementById('result');

    let emailsArray = Array.from(emailElements);
    let targetEmail = emailsArray.find(x => x.textContent === inputElement.value);

    if (targetEmail) {
        targetEmail.parentElement.remove();
        result.textContent = 'Deleted';
    } else {
        result.textContent = 'Not found.';
    }

    // for (const email of emailElements) {
    //     if (email.textContent.includes(inputElement.value)) {
    //         email.parentElement.remove();
    //     }
    // }
}