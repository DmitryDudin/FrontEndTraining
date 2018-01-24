var menuLink = document.querySelectorAll('.nav > li > a');
console.log(menuLink);

for (var i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function (event) {
        event.preventDefault();
        /*чтобы не было перехода при клике на ссылку, который задан по умолчанию*/
        var target = event.target;
        console.log(target);

        if (target.classList.contains('active')) {
            target.classList.remove('active');
        } else {
            //закрываем открытый пункт, если таковой есть
            var openLink = document.querySelector('.active');
            if (openLink) {
                openLink.classList.remove('active');
            }
            //открываем целевой пункт меню
            target.classList.add('active');
        }

    });

}