function solve() {
    //fname, lname, email, birthDate, position, salary
    let elements = document.querySelectorAll('form div input');
    let firstNameElement = elements[0]
    let lastNameElement = elements[1]
    let emailElement = elements[2]
    let birthDateElement = elements[3]
    let positionElement = elements[4]
    let salaryElement = elements[5];
    let addWorkerButton = document.getElementById('add-worker');

    let tbodyElement = document.getElementById('tbody');
    let sumText = document.getElementById('sum');
    let resultSum = 0;



    addWorkerButton.addEventListener('click', (e) => {
        e.preventDefault();

        let row = document.createElement('tr');

        if(firstNameElement.value !== '' && lastNameElement.value !== '' && emailElement.value !== '' && birthDateElement.value !== '' && positionElement.value !== '' && salaryElement.value !== ''){
            let fNameTd = document.createElement('td');
            fNameTd.textContent = firstNameElement.value;

            let lNameTd = document.createElement('td');
            lNameTd.textContent = lastNameElement.value;

            let emailTD = document.createElement('td');
            emailTD.textContent = emailElement.value;

            let birthDateTD = document.createElement('td');
            birthDateTD.textContent = birthDateElement.value;

            let positionTD = document.createElement('td');
            positionTD.textContent = positionElement.value;

            let salaryTD = document.createElement('td');
            salaryTD.textContent = Number(salaryElement.value);

            let firedButton = document.createElement('button');
            firedButton.classList.add('fired');
            firedButton.textContent = 'Fired';
            let editButton = document.createElement('button');
            editButton.classList.add('edit');
            editButton.textContent = 'Edit';

            firedButton.addEventListener('click', (e) => {
                resultSum -= Number(salaryTD.textContent);
                sumText.textContent = Number(resultSum).toFixed(2);
                e.target.parentElement.parentElement.remove();
            })

            editButton.addEventListener('click', (e) => {
                firstNameElement.value = fNameTd.textContent;
                lastNameElement.value = lNameTd.textContent;
                emailElement.value = emailTD.textContent;
                birthDateElement.value = birthDateTD.textContent;
                positionElement.value = positionTD.textContent;
                salaryElement.value = salaryTD.textContent;
                e.target.parentElement.parentElement.remove();
                
                resultSum -= Number(salaryElement.value);
                sumText.textContent = Number(resultSum).toFixed(2);

            })

            let actionTD = document.createElement('td');
            actionTD.appendChild(firedButton);
            actionTD.appendChild(editButton);

            row.appendChild(fNameTd);
            row.appendChild(lNameTd);
            row.appendChild(emailTD);
            row.appendChild(birthDateTD);
            row.appendChild(positionTD);
            row.appendChild(salaryTD);
            row.appendChild(actionTD);

            tbodyElement.appendChild(row);
        }
        resultSum += Number(salaryElement.value);
        sumText.textContent = Number(resultSum).toFixed(2);

        firstNameElement.value = '';
        lastNameElement.value = '';
        emailElement.value = '';
        birthDateElement.value ='';
        positionElement.value = '';
        salaryElement.value = '';
    })
}
solve()