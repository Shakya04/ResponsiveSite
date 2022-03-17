const mobileBtn = document.getElementById('mobile-cta');
        const nav = document.querySelector('nav');
        const mobileBtnExit = document.getElementById('mobile-exit');

        mobileBtn.addEventListener('click' , () => {
            nav.classList.add('menu-btn1');
        });


        mobileBtnExit.addEventListener('click', () => {
            nav.classList.remove('menu-btn1');
        });