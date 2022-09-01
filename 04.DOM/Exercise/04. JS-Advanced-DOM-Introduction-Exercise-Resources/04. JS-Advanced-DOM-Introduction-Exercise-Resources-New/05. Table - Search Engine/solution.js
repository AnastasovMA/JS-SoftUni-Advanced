function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = document.querySelectorAll('tbody tr');
      let inputField = document.getElementById('searchField');

      for (const row of rows) {
         if (row.textContent.includes(inputField.value) && inputField.value !== '') {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      }
      inputField.value = '';
   }
}