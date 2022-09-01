function lockedProfile() {
    let allUsers = document.querySelectorAll('.profile');

    for (const div of allUsers) {
        let lockBtn = div.children[2];
        let unlockBtn = div.children[4];
        let hiddenDiv = div.children[9];
        let showMoreAndHideBtn = div.lastElementChild;

        showMoreAndHideBtn.addEventListener('click', function () {
            if (unlockBtn.checked) {
                if(showMoreAndHideBtn.textContent === 'Show more'){
                    hiddenDiv.style.display = 'block';
                    showMoreAndHideBtn.textContent = 'Hide it';
                } else //if (showMoreAndHideBtn.textContent === 'Hide it')
                {
                    hiddenDiv.style.display = 'none';
                    showMoreAndHideBtn.textContent = 'Show more'
                }
                
            } else if (lockBtn.checked){
                return true;
            };
        });
    }
}