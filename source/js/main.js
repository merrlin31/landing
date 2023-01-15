(function() {
    const openFormButton = document.querySelector('.arrow-down');
    const form = document.querySelector('.form');
    const nav = document.querySelector('.nav');

    if (openFormButton) {
        openFormButton.addEventListener('click', function(e) {
            e.preventDefault();
            merrlin.form.open();
        })
    }

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (merrlin.form.isValid()) {
                console.log('All good');
            } else {
                console.log('Is no valid');
            }
        })
    }

    if (nav) {
        nav.addEventListener('click', function(e) {
            let target = e.target;

            if (target.tagName.toLowerCase() !== 'a') {
                return;
            }

            e.preventDefault();
            merrlin.navigation.toggleToActiveLink(target);
        });
    }

}());