(function() {
    const openFormButton = document.querySelector('.arrow-down');
    console.log(openFormButton);

    if (openFormButton) {
        openFormButton.addEventListener('click', function(e) {
            e.preventDefault();
            form.open();
        })
    }

}());