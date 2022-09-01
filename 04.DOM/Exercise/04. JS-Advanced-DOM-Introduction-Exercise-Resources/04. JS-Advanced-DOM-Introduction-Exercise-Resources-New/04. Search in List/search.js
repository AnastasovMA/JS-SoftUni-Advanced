function search() {
   let liElements = document.getElementsByTagName('li');
   let inputTextElement = document.getElementById('searchText');
   let count = 0;

   for (const el of liElements) {
      if (el.textContent.includes(inputTextElement.value)) {
         el.style.textDecoration = 'underline';
         el.style.fontWeight = 'bold';
         count++;
      } else {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = 'none';
      }
   }
   document.getElementById('result').textContent = `${count} matches found`;
}
