function create(words) {
   let contentElement = document.getElementById('content');
   
   words.forEach(el => {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');

      pElement.textContent = el;
      pElement.style.display = 'none';

      divElement.appendChild(pElement);
      // divElement.addEventListener('click', (e) => {
      //    e.currentTarget.firstChild.style.display = 'block';
      // })
      contentElement.appendChild(divElement);
   })
   contentElement.addEventListener('click', (e) => {
      e.target.children[0].style.display = 'block';
   })
}